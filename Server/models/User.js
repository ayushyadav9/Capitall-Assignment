const mongoose = require("mongoose");
const Products = require("./Product");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  productsListed:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
      default: []
    }
  ],
  createdAt: {}
});
const User = mongoose.model('user',UserSchema)
module.exports = User;


