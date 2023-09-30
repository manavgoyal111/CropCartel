import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
	if (req.method == "POST") {
		// Check if Product already exists

		// Check is it is a number
		if (!Number.isInteger(Number(req.body.price)) || !Number.isInteger(Number(req.body.availableQty))) {
			return res.status(500).json({
				success: false,
				data: "Please enter a number",
			});
		}

		// Adding a new Product
		const p = new Product({
			title: req.body.title,
			slug: req.body.slug,
			desc: req.body.desc,
			img: req.body.img,
			category: req.body.category,
			price: req.body.price,
			availableQty: req.body.availableQty,
			size: req.body.size,
			color: req.body.color,
		});
		await p.save();
		res.status(200).json({ success: true });
	} else {
		res.status(400).json({ success: false, error: "This method is not allowed" });
	}
};

export default connectDb(handler);
