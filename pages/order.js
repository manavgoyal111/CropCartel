import Head from "next/head";
import Image from "next/image";
import mongoose from "mongoose";
import Order from "../models/Order";

const MyOrder = ({ order }) => {
	return (
		<div>
			<Head>
				<title>Order | SareeWear</title>
			</Head>

			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
							<h2 className="text-sm title-font text-gray-500 tracking-widest">
								SAREEWEAR.COM
							</h2>
							<h1 className="text-gray-900 text-2xl title-font font-medium mb-4">
								Order Id: #{order.orderId}
							</h1>
							<p className="leading-relaxed mb-4">
								Your order has been successfully placed! Your payment status is:{" "}
								{order.status.charAt(0).toUpperCase() + order.status.slice(1)}
							</p>
							<div className="flex mb-4">
								<a className="flex-grow py-2 text-lg px-1 text-center">
									Item Description
								</a>
								<a className="flex-grow py-2 text-lg px-1 text-center">Quantity</a>
								<a className="flex-grow py-2 text-lg px-1 text-center">
									Item Total
								</a>
							</div>
							{/* {console.log(Object.keys(order.products))} */}
							{Object.keys(order.products).map((key, idx) => (
								<div key={idx} className="flex border-t border-gray-200 py-2">
									<span className="text-gray-500">
										{order.products[key].name}({order.products[key].size}/
										{order.products[key].variant})
									</span>
									<span className="m-auto text-gray-900">
										{order.products[key].qty}
									</span>
									<span className="m-auto text-gray-900">
										₹{order.products[key].price}
									</span>
								</div>
							))}
							<div className="flex flex-col">
								<span className="title-font font-medium text-2xl text-gray-900">
									Subtotal: ₹{order.amount}
								</span>
								<div className="my-6">
									<button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
										Track Order
									</button>
								</div>
							</div>
						</div>
						<Image
							src="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
							alt="ecommerce"
							height={400}
							width={400}
							className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
						/>
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

	let order = await Order.findById(context.query.id);

	return {
		props: {
			order: JSON.parse(JSON.stringify(order)),
		},
	};
}

export default MyOrder;
