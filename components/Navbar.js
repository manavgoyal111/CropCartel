import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	AiOutlineShoppingCart,
	AiFillCloseCircle,
	AiFillPlusCircle,
	AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
	const ref = useRef();

	const toggleCart = () => {
		if (ref.current.classList.contains("translate-x-full")) {
			ref.current.classList.remove("translate-x-full");
			ref.current.classList.add("translate-x-0");
		} else {
			ref.current.classList.remove("translate-x-0");
			ref.current.classList.add("translate-x-full");
		}
	};

	return (
		<div className="flex flex-col md:flex-row md:justify-start justify-center items-center px-5 py-2 shadow-md sticky top-0 bg-white z-10">
			<div className="logo mx-5">
				<Link href="/">
					<a className="flex justify-center text-pink-500 font-bold">
						<Image src="/2.png" alt="Home" height={40} width={40} />
					</a>
				</Link>
			</div>

			<nav>
				<ul className="flex items-center space-x-4 font-bold md:text-md">
					<Link href="/saree">
						<a className="hover:text-gray-800">
							<li>Saree</li>
						</a>
					</Link>
					<Link href="/kurti">
						<a className="hover:text-gray-800">
							<li>Kurti</li>
						</a>
					</Link>
					<Link href="/cloths">
						<a className="hover:text-gray-800">
							<li>Cloths</li>
						</a>
					</Link>
				</ul>
			</nav>

			<div className="cart cursor-pointer absolute right-4 top-4 flex">
				<Link href="/login">
					<a className="hover:text-gray-800">
						<MdAccountCircle className="text-xl md:text-2xl mx-2" />
					</a>
				</Link>
				<AiOutlineShoppingCart
					onClick={toggleCart}
					className="text-xl md:text-2xl hover:text-gray-800"
				/>
			</div>

			<div
				ref={ref}
				className={`sideCart absolute w-72 h-[100vh] top-0 right-0 bg-pink-100 px-8 py-10 overscroll-y-contain transform transition-transform ${
					Object.keys(cart).length !== 0
						? "translate-x-0"
						: "translate-x-full"
				}`}
			>
				<h2 className="font-bold text-xl text-center">Shopping Cart</h2>
				<span
					onClick={toggleCart}
					className="absolute top-4 right-4 cursor-pointer text-2xl text-pink-500"
				>
					<AiFillCloseCircle />
				</span>
				<ol className="list-decimal font-semibold">
					{Object.keys(cart).length === 0 && (
						<div className="my-4 font-semibold">
							Your cart is empty!
						</div>
					)}
					{Object.keys(cart).map((k, idx) => {
						return (
							<li key={idx}>
								<div className="item flex my-5">
									<div className="w-2/3 font-semibold">
										{cart[k].name} ({cart[k].size}/
										{cart[k].variant})
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
										<span className="mx-2 text-sm">
											{cart[k].qty}
										</span>
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
				<div className="font-bold my-2">Subtotal: ₹{subTotal}</div>
				<div className="flex">
					<Link href="/checkout">
						<a>
							<button className="flex mx-auto items-center text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm">
								<BsFillBagCheckFill className="mx-1" /> Checkout
							</button>
						</a>
					</Link>
					<button
						onClick={clearCart}
						className="flex mx-auto items-center text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm"
					>
						Clear Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
