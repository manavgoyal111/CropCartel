import { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [pincode, setPincode] = useState("");
	const [address, setAddress] = useState("");
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [disabled, setDisabled] = useState(true);

	const handleChange = (e) => {
		if (e.target.name == "name") {
			setName(e.target.value);
		} else if (e.target.name == "email") {
			setEmail(e.target.value);
		} else if (e.target.name == "phone") {
			setPhone(e.target.value);
		} else if (e.target.name == "pincode") {
			setPincode(e.target.value);
		} else if (e.target.name == "address") {
			setAddress(e.target.value);
		}

		if (
			name.length > 3 &&
			email.length > 3 &&
			phone.length > 3 &&
			address.length > 3 &&
			pincode.length > 3
		) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	};

	const initiatePayment = async () => {
		const orderData = { subTotal, cart, email, name, phone, pincode, address };
		const orderRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(orderData),
		});
		const orderDataRes = await orderRes.json();
		const { data } = orderDataRes;
		console.log(data);

		const orderKey = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const orderKeyRes = await orderKey.json();

		const options = {
			key: orderKeyRes,
			amount: data.amount,
			currency: "INR",
			name: "SareeWear",
			description: "Wear a Saree with Style",
			image: "14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlY2tvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
			order_id: data.id,
			callback_url: `${process.env.NEXT_PUBLIC_HOST}/api/posttransaction`,
			prefill: {
				name: name,
				email: email,
				contact: phone,
			},
			notes: {
				address: address,
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
								value={name}
								onChange={handleChange}
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
								value={email}
								onChange={handleChange}
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
							value={address}
							onChange={handleChange}
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
								value={phone}
								onChange={handleChange}
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
								value={pincode}
								onChange={handleChange}
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
								value={state}
								readOnly={true}
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
								value={city}
								readOnly={true}
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
					<button
						onClick={initiatePayment}
						disabled={disabled}
						className="flex mx-auto items-center text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm disabled:bg-pink-300"
					>
						<BsFillBagCheckFill className="mr-2" />
						Pay ₹{subTotal}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
