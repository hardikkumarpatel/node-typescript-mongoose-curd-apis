import mongoose, { Schema } from 'mongoose';

const Product = new Schema({
    productName: String,
    prodStockCode: String,
    prodPuCode: String,
    prodTracingNumber: String,
    prodStatus: String,
    proddescription: String,
    prodExpiredDate: Date,
    prodRating: Number
});

const ProductSchema = mongoose.model("products", Product);
export default ProductSchema;
