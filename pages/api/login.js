import User from "../../models/User";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
	if (req.method == "POST") {
		let user = await User.findOne({ email: req.body.email });
		if (user) {
			if (
				req.body.email == user.email &&
				req.body.password == user.password
			) {
				res.status(200).json({
					success: true,
					name: user.name,
					email: user.email,
				});
			} else {
				res.status(200).json({
					success: false,
					error: "Invalid credentials",
				});
			}
		} else {
			res.status(200).json({
				success: false,
				error: "No user found",
			});
		}
	} else {
		res.status(400).json({ error: "This method is not allowed" });
	}
};

export default connectDb(handler);
