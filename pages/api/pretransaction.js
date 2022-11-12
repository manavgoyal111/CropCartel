import Order from "../../models/Order";
import connectDb from "../../middleware/mongoose";

const Razorpay = require("razorpay");

const handler = async (req, res) => {
	const instance = new Razorpay({
		key_id: process.env.NEXT_PUBLIC_PAY_KEY_ID,
		key_secret: process.env.NEXT_PUBLIC_PAY_KEY_SECRET,
	});

	if (req.method == "POST") {
		try {
			// Generating Order ID
			const options = {
				amount: req.body.subTotal * 100,
				currency: "INR",
			};
			const orderData = await instance.orders.create(options);

			if (!orderData) {
				return res.status(500).send("Some error Occured");
			}

			try {
				// Check if the Cart is Tampered

				// Check if the cart items are out of Stock

				// Check if the details are valid

				// Initiate an Order corresponding to this OrderId
				let o = new Order({
					email: req.body.email,
					orderId: orderData.id,
					address: req.body.address,
					products: req.body.cart,
					amount: orderData.amount,
					status: orderData.status,
				});
				await o.save();
			} catch (err) {
				console.log("Order not initiated ", err);
			}

			res.status(200).json({ success: true, data: orderData });
		} catch (err) {
			return res.status(500).json({
				message: err,
			});
		}
	} else if (req.method == "GET") {
		try {
			res.status(200).json({ key: process.env.NEXT_PUBLIC_PAY_KEY_ID });
		} catch (err) {
			return res.status(500).json({
				message: err,
			});
		}
	}
};

export default connectDb(handler);
