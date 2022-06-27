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

const Navbar = () => {
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
		<div className="flex flex-col md:flex-row md:justify-start justify-center items-center px-5 py-2 shadow-md">
			<div className="logo mx-5">
				<Link href="/">
					<a className="flex justify-center text-pink-500 font-bold">
						<Image src="/2.png" alt="Home" height={40} width={40} />
					</a>
				</Link>
			</div>

			<nav>
				<ul className="flex items-center space-x-4 font-bold md:text-md">
					<Link href="/tshirts">
						<a>
							<li>Tshirts</li>
						</a>
					</Link>
					<Link href="/hoodies">
						<a>
							<li>Hoodies</li>
						</a>
					</Link>
					<Link href="/stickers">
						<a>
							<li>Stickers</li>
						</a>
					</Link>
					<Link href="/mugs">
						<a>
							<li>Mugs</li>
						</a>
					</Link>
				</ul>
			</nav>

			<div
				onClick={toggleCart}
				className="cart cursor-pointer absolute right-4 top-4"
			>
				<AiOutlineShoppingCart className="text-xl md:text-2xl" />
			</div>

			<div
				ref={ref}
				className="sideCart absolute w-72 h-full top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full z-10"
			>
				<h2 className="font-bold text-xl text-center">Shopping Cart</h2>
				<span
					onClick={toggleCart}
					className="absolute top-4 right-4 cursor-pointer text-2xl text-pink-500"
				>
					<AiFillCloseCircle />
				</span>
				<ol className="list-decimal font-semibold">
					<li>
						<div className="item flex my-5">
							<div className="w-2/3 font-semibold">
								Tshirt - Wear the Saree
							</div>
							<div className="flex items-center justify-center w-1/3 font-semibold text-lg">
								<AiFillMinusCircle className="cursor-pointer text-pink-500" />
								<span className="mx-2 text-sm">1</span>
								<AiFillPlusCircle className="cursor-pointer text-pink-500" />
							</div>
						</div>
					</li>
					<li>
						<div className="item flex my-5">
							<div className="w-2/3 font-semibold">
								Tshirt - Wear the Saree
							</div>
							<div className="flex items-center justify-center w-1/3 font-semibold text-lg">
								<AiFillMinusCircle className="cursor-pointer text-pink-500" />
								<span className="mx-2 text-sm">1</span>
								<AiFillPlusCircle className="cursor-pointer text-pink-500" />
							</div>
						</div>
					</li>
					<li>
						<div className="item flex my-5">
							<div className="w-2/3 font-semibold">
								Tshirt - Wear the Saree
							</div>
							<div className="flex items-center justify-center w-1/3 font-semibold text-lg">
								<AiFillMinusCircle className="cursor-pointer text-pink-500" />
								<span className="mx-2 text-sm">1</span>
								<AiFillPlusCircle className="cursor-pointer text-pink-500" />
							</div>
						</div>
					</li>
					<li>
						<div className="item flex my-5">
							<div className="w-2/3 font-semibold">
								Tshirt - Wear the Saree
							</div>
							<div className="flex items-center justify-center w-1/3 font-semibold text-lg">
								<AiFillMinusCircle className="cursor-pointer text-pink-500" />
								<span className="mx-2 text-sm">1</span>
								<AiFillPlusCircle className="cursor-pointer text-pink-500" />
							</div>
						</div>
					</li>
					<li>
						<div className="item flex my-5">
							<div className="w-2/3 font-semibold">
								Tshirt - Wear the Saree
							</div>
							<div className="flex items-center justify-center w-1/3 font-semibold text-lg">
								<AiFillMinusCircle className="cursor-pointer text-pink-500" />
								<span className="mx-2 text-sm">1</span>
								<AiFillPlusCircle className="cursor-pointer text-pink-500" />
							</div>
						</div>
					</li>
				</ol>
				<div className="flex">
					<button className="flex mx-auto items-center text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm">
						<BsFillBagCheckFill className="mx-1" /> Checkout
					</button>
					<button className="flex mx-auto items-center text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm">
						Clear Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
