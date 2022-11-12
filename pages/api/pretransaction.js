import Order from "../../models/Order";
import Product from "../../models/Product";
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
				let product,
					sumTotal = 0,
					cart = req.body.cart;

				for (let item in req.body.cart) {
					sumTotal += cart[item].price * cart[item].qty;
					product = await Product.findOne({ slug: item });
					// Check if the cart items are out of Stock
					if (product.availableQty < cart[item].qty) {
						res.status(500).json({
							success: false,
							data: "Some items in your cart went out of stock, please try with lesser quantity!",
						});
						return;
					}

					// Check if the Cart is Tampered with
					if (product.price != cart[item].price) {
						res.status(500).json({
							success: false,
							data: "Price of some items have changed, please try again!",
						});
						return;
					}
				}

				if (sumTotal != req.body.subTotal) {
					res.status(500).json({
						success: false,
						data: "Price of some items have changed, please try again.",
					});
					return;
				}

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
				success: false,
				data: err,
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
