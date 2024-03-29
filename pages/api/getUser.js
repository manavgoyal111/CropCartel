import connectDb from "../../middleware/mongoose";
import User from "../../models/User";

const jwt = require("jsonwebtoken");

const handler = async (req, res) => {
	if (req.method !== "POST") {
		res.status(405).json({ success: false, data: "Invalid request" });
		return;
	}

	try {
		const token = req.body.token;
		if (!token) {
			res.status(200).json({ success: false, data: "Please login!" });
			return;
		}
		const userData = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);

		// Check token expiration
		const decodedToken = jwt.decode(token);
		if (decodedToken && decodedToken.exp && Date.now() / 1000 > decodedToken.exp) {
			res.status(401).json({ success: false, error: "Login Again!" });
			return;
		}

		const userDbData = await User.findOne({ email: userData.email });
		const { name, email, address, pincode, phone, admin } = userDbData;
		// console.log(userDbData);
		res.status(200).json({ success: true, data: { name, email, address, pincode, phone, admin } });
	} catch (err) {
		res.status(400).json({ success: false, data: err });
	}
};

export default connectDb(handler);
