const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   name: { type: String, required: true },
   description: String,
   price: { type: Number, required: true },
   quantity: Number,
   category: String,
   imageURL: String,
});

module.exports = mongoose.model('Product', productSchema);
