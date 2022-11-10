import Head from "next/head";
import Script from "next/script";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
	const initiatePayment = async () => {
		const orderData = { subTotal };
		const orderRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(orderData),
		});
		const orderDataRes = await orderRes.json();
		// console.log(orderDataRes);
		const { data } = orderDataRes;

		const orderKey = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const orderKeyRes = await orderKey.json();
		// console.log(orderKeyRes);

		const options = {
			key: orderKeyRes,
			amount: data.amount,
			currency: "INR",
			name: "SareeWear",
			description: "Saree Wear",
			image: "14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlY2tvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
			order_id: data.id,
			callback_url: `${process.env.NEXT_PUBLIC_HOST}/api/posttransaction`,
			prefill: {
				name: "Manav Goyal",
				email: "manav.goyal.dev@gmail.com",
				contact: "9939311111",
			},
			notes: {
				address: "Razorpay Corporate Office",
			},
			theme: {
				color: "#99cc33",
			},
		};

		var razor = new window.Razorpay(options);
		razor.open();
	};

	return (
		<div>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
				/>
				<title>Checkout | SareeWear</title>
			</Head>

			<Script
				type="application/javascript"
				crossorigin="anonymous"
				src="https://checkout.razorpay.com/v1/checkout.js"
			/>

			<div className="container sm:m-auto px-2 md:w-10/12">
				<h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
				<h2 className="font-semibold text-xl my-2">1. Delivery Details</h2>
				<div className="mx-auto flex">
					<div className="px-2 w-1/2">
						<div className="mb-4">
							<label htmlFor="name" className="leading-7 text-sm text-gray-600">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
					<div className="px-2 w-1/2">
						<div className="mb-4">
							<label htmlFor="email" className="leading-7 text-sm text-gray-600">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
				</div>
				<div className="px-2 w-full">
					<div className="mb-4">
						<label htmlFor="address" className="leading-7 text-sm text-gray-600">
							Address
						</label>
						<textarea
							id="address"
							name="address"
							cols="30"
							rows="2"
							className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div className="mx-auto flex">
					<div className="px-2 w-1/2">
						<div className="mb-4">
							<label htmlFor="phone" className="leading-7 text-sm text-gray-600">
								Phone
							</label>
							<input
								type="number"
								id="phone"
								name="phone"
								className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
					<div className="px-2 w-1/2">
						<div className="mb-4">
							<label htmlFor="city" className="leading-7 text-sm text-gray-600">
								City
							</label>
							<input
								type="text"
								id="city"
								name="city"
								className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
				</div>
				<div className="mx-auto flex">
					<div className="px-2 w-1/2">
						<div className="mb-4">
							<label htmlFor="state" className="leading-7 text-sm text-gray-600">
								State
							</label>
							<input
								type="text"
								id="state"
								name="state"
								className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
					<div className="px-2 w-1/2">
						<div className="mb-4">
							<label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
								Pincode
							</label>
							<input
								type="text"
								id="pincode"
								name="pincode"
								className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
				</div>

				<h2 className="font-semibold text-xl my-2">2. Review Cart Items & Pay</h2>
				<div className="sideCart bg-pink-100 p-6 m-2 transform z-10">
					<ol className="list-decimal font-semibold">
						{Object.keys(cart).length === 0 && (
							<div className="my-4 font-semibold">Your cart is empty!</div>
						)}
						{Object.keys(cart).map((k, idx) => {
							return (
								<li key={idx}>
									<div className="item flex my-5">
										<div className="font-semibold">
											{cart[k].name} ({cart[k].size}/{cart[k].variant})
										</div>
										<div className="flex items-center justify-center w-1/3 font-semibold text-lg">
											<AiFillMinusCircle
												onClick={() => {
													removeFromCart(
														k,
														1,
														cart[k].price,
														cart[k].name,
														cart[k].size,
														cart[k].variant
													);
												}}
												className="cursor-pointer text-pink-500"
											/>
											<span className="mx-2 text-sm">{cart[k].qty}</span>
											<AiFillPlusCircle
												onClick={() => {
													addToCart(
														k,
														1,
														cart[k].price,
														cart[k].name,
														cart[k].size,
														cart[k].variant
													);
												}}
												className="cursor-pointer text-pink-500"
											/>
										</div>
									</div>
								</li>
							);
						})}
					</ol>
					<span className="font-bold">Subtotal: ₹{subTotal}</span>
				</div>
				<div className="mx-4">
					{/* <Link href="/order">
						<a> */}
					<button
						onClick={initiatePayment}
						className="flex mx-auto items-center text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm"
					>
						Pay ₹{subTotal}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
