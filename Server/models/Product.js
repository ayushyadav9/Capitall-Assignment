const mongoose = require("mongoose");
const Users = require("./User");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { 
    type: String 
  },
  price: {
    type: Number
  },
  desc:{
    type: String
  },
  isSold:{
    type: Boolean,
    default: false
  },
  boughtBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: null
  },
  boughtOn:{},
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  createdAt: {}
});
const Products = mongoose.model("products", ProductSchema);
module.exports = Products;
