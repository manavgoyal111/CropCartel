import connectDb from "../../middleware/mongoose";
import Order from "../../models/Order";

const handler = async (req, res) => {
	try {
		const orders = await Order.findById(req.query.id);
		res.status(200).json({ success: true, data: orders });
	} catch (err) {
		res.status(400).json({ success: false, data: err });
	}
};

export default connectDb(handler);
