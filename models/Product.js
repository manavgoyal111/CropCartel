const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		slug: { type: String, required: true, unique: true },
		desc: { type: String, required: true },
		img: { type: String, required: true },
		category: { type: String, required: true },
		price: { type: Number, required: true },
		availableQty: { type: Number, default: 1 },
		size: { type: String },
		color: { type: String },
	},
	{ timestamps: true }
);

export default mongoose.models.Product ||
	mongoose.model("Product", productSchema);
