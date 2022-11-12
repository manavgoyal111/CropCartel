const crypto = require("crypto");
import Order from "../../models/Order";
import connectDb from "../../middleware/mongoose";

const Razorpay = require("razorpay");

const handler = async (req, res) => {
	const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

	// Generating Signature corresponding to the transaction for Validation
	const body = razorpay_order_id + "|" + razorpay_payment_id;
	const expectedSignature = crypto
		.createHmac("sha256", process.env.NEXT_PUBLIC_PAY_KEY_SECRET)
		.update(body.toString())
		.digest("hex");

	// Payment Invalid
	if (expectedSignature !== razorpay_signature) {
		res.status(400).json({ success: false });
	}

	// Update the Order status
	const instance = new Razorpay({
		key_id: process.env.NEXT_PUBLIC_PAY_KEY_ID,
		key_secret: process.env.NEXT_PUBLIC_PAY_KEY_SECRET,
	});
	const orderInfo = await instance.payments.fetch(razorpay_payment_id);
	let order = await Order.findOneAndUpdate(
		{ orderId: razorpay_order_id },
		{
			paymentId: razorpay_payment_id,
			signature: razorpay_signature,
			status: orderInfo.status,
		}
	);

	// Initiate Shipping

	// Redirect user to Order confirmation page
	res.redirect(`${process.env.NEXT_PUBLIC_HOST}/order?id=${order._id}`);
};

export default connectDb(handler);
