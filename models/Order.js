const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		email: { type: String, required: true },
		orderId: { type: String, required: true },
		paymentId: { type: String, default: "x" },
		signature: { type: String, default: "x" },
		products: { type: Object, required: true },
		address: { type: String, required: true },
		amount: { type: Number, required: true },
		status: { type: String, default: "initiated", required: true },
	},
	{ timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
