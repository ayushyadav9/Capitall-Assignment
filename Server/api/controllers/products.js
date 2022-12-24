const { Mongoose } = require("mongoose");
const Products = require("../../models/Product");
const User = require("../../models/User");

module.exports.addProduct = async (req, res) => {
  try {
    let { name, price, desc } = req.body;
    let user = req.user;
    let prod = new Products({
      name: name,
      price: price,
      desc: desc,
      owner: user._id,
      createdAt: new Date().getTime(),
    });
    prod.save().then((savedProd,err)=>{
      if (err) {
        return res.status(200).json({
          message: "Error in adding product",
          error: err.message,
          success: false,
        });
      }
      User.findByIdAndUpdate(user._id, {
        $push: {
          "productsListed": savedProd._id,
        }
      }).then((data, err) => {
        if (err) {
          return res.status(200).json({
            message: "Error in adding product to user",
            error: err.message,
            success: false,
          });
        }
        return res.status(200).json({
          message: "Added Successfully",
          success: true,
        });
      })
    })
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "Something went wrong",
      success: false,
    });
  }
};

module.exports.getUserProduct = async (req, res) => {
    try {
    let user = req.user
      let prod = await Products.find({owner:user._id}).populate("boughtBy", "name email");;
      if (!prod) {
        return res.status(400).json({
          message: "User Dosent posted any product",
          success: false,
        });
      }
      res.status(200).json({
        message: "Products found",
        data: prod,
        success: true,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
        message: "Something went wrong",
        success: false,
      });
    }
};

module.exports.getAllProduct = async (req, res) => {
  try {
      let prods = await Products.find({isSold:false}).populate("owner", "name email");
      res.status(200).json({
        message: "Product found",
        data: prods,
        success: true,
      });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "Something went wrong",
      success: false,
    });
  }
};

module.exports.getProduct = async (req, res) => {
  try {
    let prod = await Products.findById(req.params.id).populate("owner", "name email");
    if (!prod) {
      return res.status(400).json({
        message: "No product found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Product found",
      data: prod,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "Something went wrong",
      success: false,
    });
  }
};

module.exports.buyProduct = async (req, res) => {
  try {
    let user = req.user;
    let prod = await Products.findById(req.params.pId);
    if (!prod) {
      return res.status(400).json({
        message: "No product found",
        success: false,
      });
    }
    if (prod.owner.toString() == user._id.toString()) {
      return res.status(200).json({
        message: "You cannot buy your own product",
        success: false,
      });
    }
    Products.findByIdAndUpdate(req.params.pId, {
      $set: {"boughtBy": user._id,"isSold": true,"boughtOn":new Date().getTime()}
    }).then((data, err) => {
      if (err) {
        return res.status(200).json({
          message: "Error in updating bought user",
          error: err.message,
          success: false,
        });
      }
      return res.status(200).json({
        message: "Bought Successfully",
        success: true,
      });
    })
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "Something went wrong",
      success: false,
    });
  }
};


module.exports.getPurchasedProducts = async (req, res) => {
  try {
  let user = req.user
    let prod = await Products.find({boughtBy:user._id}).populate("owner", "name email");;
    if (!prod) {
      return res.status(400).json({
        message: "User Dosent posted any product",
        success: false,
      });
    }
    res.status(200).json({
      message: "Products found",
      data: prod,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "Something went wrong",
      success: false,
    });
  }
};
