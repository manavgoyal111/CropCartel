import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
	if (req.method == "POST") {
		
		res.status(200).json({ success: "Success" });
	} else {
		res.status(400).json({ error: "This method is not allowed" });
	}
};

export default connectDb(handler);
