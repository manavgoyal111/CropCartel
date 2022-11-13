import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {
	const router = useRouter();

	const [cart, setCart] = useState({});
	const [subTotal, setSubTotal] = useState(0);
	const [user, setUser] = useState({ value: null });
	const [key, setKey] = useState();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		router.events.on("routeChangeStart", () => {
			setProgress(40);
		});
		router.events.on("routeChangeComplete", () => {
			setProgress(100);
		});

		try {
			if (localStorage.getItem("cart")) {
				setCart(JSON.parse(localStorage.getItem("cart")));
				saveCart(JSON.parse(localStorage.getItem("cart")));
			}
		} catch (error) {
			console.log(error);
			localStorage.clear();
		}
		const token = localStorage.getItem("token");
		if (token) {
			setUser({ value: token });
		}
		setKey(Math.random());
	}, [router.query]);

	const saveCart = (myCart) => {
		localStorage.setItem("cart", JSON.stringify(myCart));
		let subt = 0;
		let keys = Object.keys(myCart);
		for (let i = 0; i < keys.length; i++) {
			subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty;
		}
		setSubTotal(subt);
	};

	const addToCart = (itemCode, qty, price, name, size, variant) => {
		let newCart = JSON.parse(JSON.stringify(cart));
		if (itemCode in cart) {
			newCart[itemCode].qty = cart[itemCode].qty + qty;
		} else {
			newCart[itemCode] = { qty: 1, price, name, size, variant };
		}
		setCart(newCart);
		saveCart(newCart);
	};

	const removeFromCart = (itemCode, qty, price, name, size, variant) => {
		let newCart = JSON.parse(JSON.stringify(cart));
		if (itemCode in cart) {
			newCart[itemCode].qty = cart[itemCode].qty - qty;
		}
		if (newCart[itemCode]["qty"] <= 0) {
			delete newCart[itemCode];
		}
		setCart(newCart);
		saveCart(newCart);
	};

	const clearCart = () => {
		setCart({});
		saveCart({});
	};

	const buyNow = (itemCode, qty, price, name, size, variant) => {
		let newCart = {};
		newCart[itemCode] = { qty: 1, price, name, size, variant };
		saveCart(newCart);
		setCart(newCart);
		router.push("/checkout");
	};

	const logout = () => {
		localStorage.removeItem("token");
		setUser({ value: null });
		router.push("/");
		setKey(Math.random());
	};

	return (
		<div>
			<LoadingBar
				color="#ff2d55"
				progress={progress}
				waitingTime={400}
				onLoaderFinished={() => setProgress(0)}
			/>
			{key && (
				<Navbar
					key={key}
					logout={logout}
					user={user}
					cart={cart}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
					clearCart={clearCart}
					subTotal={subTotal}
				/>
			)}
			<Component
				cart={cart}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				clearCart={clearCart}
				buyNow={buyNow}
				subTotal={subTotal}
				{...pageProps}
			/>
			<Footer />
		</div>
	);
};

export default MyApp;

// Development
// MONGO_URI=mongodb://localhost:27017/sareewear
// NEXT_PUBLIC_HOST=http://localhost:3000

// Production
// NEXT_PUBLIC_HOST=https://saree-wear.vercel.app/
// MONGO_URI=

// Paytm Data
// NEXT_PUBLIC_PAYTM_HOST=https://securegw.paytm.in
// NEXT_PUBLIC_PAYTM_MID=gFJEHN98368540576014
// PAYTM_MKEY=jdXGn52l1e3mb%pQ

// RazorPay Data
// NEXT_PUBLIC_PAY_MERCHANT_ID=KdopIMLXiTEmMv
// NEXT_PUBLIC_PAY_KEY_ID=rzp_test_KuFQeWdckR2Z5I
// NEXT_PUBLIC_PAY_KEY_SECRET=WulLGjsEY6ITNzjfceIanBCE

// To-Do
// Create a api to get user data from token and use it in /checkout for email generation
// Change city to district name
// Don't empty cart for certain cases
