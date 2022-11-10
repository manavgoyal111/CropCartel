const crypto = require("crypto");

export default async function handler(req, res) {
	// console.log(req.body);
	const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

	const body = razorpay_order_id + "|" + razorpay_payment_id;
	const expectedSignature = crypto
		.createHmac("sha256", process.env.NEXT_PUBLIC_PAY_KEY_SECRET)
		.update(body.toString())
		.digest("hex");
	// console.log("sig received ", razorpay_signature);
	// console.log("sig generated ", expectedSignature);

	if (expectedSignature === razorpay_signature) {
		// Save Data in Database
		res.redirect(`${process.env.NEXT_PUBLIC_HOST}/order?id=${razorpay_order_id}`);
		// res.status(200).json({ success: true });
	}
	res.status(400).json({ success: false });
}
