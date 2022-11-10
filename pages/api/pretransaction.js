const Razorpay = require("razorpay");

export default async function handler(req, res) {
	const instance = new Razorpay({
		key_id: "rzp_test_KuFQeWdckR2Z5I",
		key_secret: "WulLGjsEY6ITNzjfceIanBCE",
	});
	const { orderId, subTotal, payment_capture, razorpay_payment_id } = req.body;
	console.log(req.body.response);
	console.log(req.body.subTotal);

	if (req.method == "POST") {
		try {
			const options = {
				amount: 100,
				// amount: Number(subTotal * 100),
				currency: "INR",
				// receipt: orderId,
				// payment_capture: payment_capture,
			};

			const order = await instance.orders.create(options);
			// console.log(order);
			if (!order) return res.status(500).send("Some error Occured");
			res.status(200).json({ success: true, data: order });
		} catch (err) {
			return res.status(500).json({
				message: err,
			});
		}
	} else if (req.method == "GET") {
		try {
			// await instance.payment.fetch(razorpay_payment_id).then((order) => {
			// 	res.status(200).json({ success: true, data: order });
			// });
			res.status(200).json({ key: process.env.NEXT_PUBLIC_PAY_KEY_ID });
		} catch (err) {
			return res.status(500).json({
				message: err,
			});
		}
	}
}
