import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import mongoose from "mongoose";
import Product from "../models/Product";

const Other = ({ products }) => {
	return (
		<div className="min-h-screen">
			<Head>
				<title>Other | CropCartel</title>
			</Head>

			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4 justify-center mx-5">
						{Object.keys(products).length === 0 && (
							<p>
								Sorry, All the Others are currently out of stock. New stock coming
								soon. Stay tuned!
							</p>
						)}
						{Object.keys(products).map((item) => (
							<Link
								href={`/product/${products[item].slug}`}
								passHref
								key={products[item]._id}
							>
								<div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-md m-3">
									<a className="block relative rounded overflow-hidden">
										<Image
											alt="ecommerce"
											className="m-auto md:mx-0 block"
											src={products[item].img}
											height={700}
											width={700}
										/>
									</a>
									<div className="mt-4 text-center md:text-left">
										<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
											Other
										</h3>
										<h2 className="text-gray-900 title-font text-lg font-medium">
											{products[item].title}
										</h2>
										<p className="mt-1">₹{products[item].price}</p>
										<div className="mt-1">
											{products[item].size.includes("S") && (
												<span className="border border-gray-300 px-1 mx-1">
													S
												</span>
											)}
											{products[item].size.includes("M") && (
												<span className="border border-gray-300 px-1 mx-1">
													M
												</span>
											)}
											{products[item].size.includes("L") && (
												<span className="border border-gray-300 px-1 mx-1">
													L
												</span>
											)}
											{products[item].size.includes("XL") && (
												<span className="border border-gray-300 px-1 mx-1">
													XL
												</span>
											)}
											{products[item].size.includes("XXL") && (
												<span className="border border-gray-300 px-1 mx-1">
													XXL
												</span>
											)}
										</div>
										<div className="mt-1">
											{products[item].color.includes("red") && (
												<button className="border-2 border-gray-300 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>
											)}
											{products[item].color.includes("black") && (
												<button className="border-2 border-gray-300 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
											)}
											{products[item].color.includes("blue") && (
												<button className="border-2 border-gray-300 bg-blue-600 rounded-full w-6 h-6 focus:outline-none"></button>
											)}
											{products[item].color.includes("green") && (
												<button className="border-2 border-gray-300 bg-green-600 rounded-full w-6 h-6 focus:outline-none"></button>
											)}
											{products[item].color.includes("yellow") && (
												<button className="border-2 border-gray-300 bg-yellow-600 rounded-full w-6 h-6 focus:outline-none"></button>
											)}
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export async function getServerSideProps(context) {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.MONGO_URI);
	}

	let products = await Product.find({ category: "other" });
	let others = {};
	for (let item of products) {
		if (item.title in others) {
			if (!others[item.title].color.includes(item.color) && item.availableQty > 0) {
				others[item.title].color.push(item.color);
			}
			if (!others[item.title].size.includes(item.size) && item.availableQty > 0) {
				others[item.title].size.push(item.size);
			}
		} else {
			others[item.title] = JSON.parse(JSON.stringify(item));
			if (item.availableQty > 0) {
				others[item.title].color = [item.color];
				others[item.title].size = [item.size];
			} else {
				sarees[item.title].color = [];
				sarees[item.title].size = [];
			}
		}
	}

	return {
		props: { products: JSON.parse(JSON.stringify(others)) },
	};
}

export default Other;
