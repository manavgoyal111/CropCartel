export default function handler(req, res) {
	const pincodes = {
		854318: ["Araria", "Bihar"],
		811201: ["Munger", "Bihar"],
		632014: ["Vellore", "Tamil Nadu"],
	};

	res.status(200).json(pincodes);
}
