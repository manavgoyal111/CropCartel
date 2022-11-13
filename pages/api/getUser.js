import jsonwebtoken from "jsonwebtoken";

export default function handler(req, res) {
	try {
		const token = req.body.token;
		const data = jsonwebtoken.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
		res.status(200).json({ success: true, data });
	} catch (err) {
		res.status(400).json({ success: false, data: err });
	}
}
