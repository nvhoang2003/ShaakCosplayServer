const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Details: {
      wig: { type: Boolean, required: true },
      accessories: { type: String, required: true },
      costume: { type: Boolean, required: true },
      shoes: { type: Boolean, required: true },
    },
    Description: {
      descString: { type: String, required: true },
      brand: { type: String, required: true },
    },
    Category: { type: String, required: true },
    Image: { type: String, required: true },
    Name: { type: String, required: true },
    RentPrice: { type: Number, required: true },
    Size: { type: Number, required: true },
  });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;