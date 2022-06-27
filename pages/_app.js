import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
	const [cart, setCart] = useState({});
	const [subTotal, setSubTotal] = useState(0);

	useEffect(() => {
		try {
			if (localStorage.getItem("cart")) {
				setCart(JSON.parse(localStorage.getItem("cart")));
			}
		} catch (error) {
			console.log(error);
			localStorage.clear();
		}
	}, []);

	const saveCart = (myCart) => {
		localStorage.setItem("cart", myCart);
	};

	const addToCart = (itemCode, qty, price, name, size, variant) => {
		let newCart = cart;
		if (itemCode in cart) {
			newCart[itemCode].qty = cart[itemCode].qty + qty;
		} else {
			newCart[itemCode] = { qty: 1, price, name, size, variant };
		}
		setCart(newCart);
		saveCart(newCart);
	};

	const removeFromCart = (itemCode, qty, price, name, size, variant) => {
		let newCart = cart;
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

	return (
		<>
			<Navbar
				cart={cart}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				clearCart={clearCart}
				subTotal={subTotal}
			/>
			<Component
				cart={cart}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				clearCart={clearCart}
				subTotal={subTotal}
				{...pageProps}
			/>
			<Footer />
		</>
	);
}

export default MyApp;
