import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const Order = () => {
	const router = useRouter();

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
								Order Id: {router.query.id}
							</h1>
							<p className="leading-relaxed mb-4">
								Your order has been successfully placed!
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
							<div className="flex border-t border-gray-200 py-2">
								<span className="text-gray-500">Wear the Code (XL)</span>
								<span className="ml-auto text-gray-900">4</span>
								<span className="ml-auto text-gray-900">₹366</span>
							</div>
							<div className="flex border-t border-gray-200 py-2">
								<span className="text-gray-500">Wear the Code (L)</span>
								<span className="ml-auto text-gray-900">2</span>
								<span className="ml-auto text-gray-900">₹739</span>
							</div>
							<div className="flex border-t border-b mb-6 border-gray-200 py-2">
								<span className="text-gray-500">Wear the Code (S)</span>
								<span className="ml-auto text-gray-900">4</span>
								<span className="ml-auto text-gray-900">₹43</span>
							</div>
							<div className="flex flex-col">
								<span className="title-font font-medium text-2xl text-gray-900">
									Subtotal: ₹2829
								</span>
								<div className="my-6">
									<button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
										Track Order
									</button>
								</div>
							</div>
						</div>
						<Image
							src="https://dummyimage.com/400x400"
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

export default Order;
