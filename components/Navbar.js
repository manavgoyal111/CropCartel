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
		<div className="flex flex-col md:flex-row md:justify-between justify-center items-center px-5 py-1 shadow-md">
			<div className="logo">
				<Link href="/">
					<a className="flex justify-center text-pink-500 font-bold">
						<Image
							src="/2.png"
							alt="Home"
							height={40}
							width={40}
						/>
					</a>
				</Link>
			</div>

			<nav>
				<ul className="flex items-center space-x-8 font-bold">
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

			<div onClick={toggleCart} className="cart cursor-pointer">
				<AiOutlineShoppingCart size={25} />
			</div>

			<div
				ref={ref}
				className="sideCart absolute w-72 h-full top-0 right-0 bg-gray-200 px-8 py-10 transform transition-transform translate-x-full z-10"
			>
				<h2 className="font-bold text-xl text-center">Shopping Cart</h2>
				<span
					onClick={toggleCart}
					className="absolute top-3 right-5 cursor-pointer text-2xl text-gray-400"
				>
					<AiFillCloseCircle />
				</span>
				<ol className="list-decimal font-semibold">
					<li>
						<div className="item flex my-3">
							<div className="w-2/3 font-semibold">
								Tshirt - Wear the Saree
							</div>
							<div className="flex items-center justify-center w-1/3 space-x-2">
								<AiFillMinusCircle
									className="cursor-pointer text-gray-400"
									size={25}
								/>
								<span>1</span>
								<AiFillPlusCircle
									className="cursor-pointer text-gray-400"
									size={25}
								/>
							</div>
						</div>
					</li>
					<li>
						<div className="item flex my-3">
							<div className="w-2/3 font-semibold">
								Tshirt - Wear the saree
							</div>
							<div className="flex items-center justify-center w-1/3 space-x-2">
								<AiFillMinusCircle
									className="cursor-pointer text-gray-400"
									size={25}
								/>
								<span>1</span>
								<AiFillPlusCircle
									className="cursor-pointer text-gray-400"
									size={25}
								/>
							</div>
						</div>
					</li>
					<li>
						<div className="item flex my-3">
							<div className="w-2/3 font-semibold">
								Tshirt - Wear the saree
							</div>
							<div className="flex items-center justify-center w-1/3 space-x-2">
								<AiFillMinusCircle
									className="cursor-pointer text-gray-400"
									size={25}
								/>
								<span>1</span>
								<AiFillPlusCircle
									className="cursor-pointer text-gray-400"
									size={25}
								/>
							</div>
						</div>
					</li>
					<li>
						<div className="item flex my-3">
							<div className="w-2/3 font-semibold">
								Tshirt - Wear the saree
							</div>
							<div className="flex items-center justify-center w-1/3 space-x-2">
								<AiFillMinusCircle
									className="cursor-pointer text-gray-400"
									size={25}
								/>
								<span>1</span>
								<AiFillPlusCircle
									className="cursor-pointer text-gray-400"
									size={25}
								/>
							</div>
						</div>
					</li>
				</ol>
				<div className="flex">
					<button className="flex mx-auto mt-16 items-center text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded text-sm">
						<BsFillBagCheckFill className="mx-1" /> Checkout
					</button>
					<button className="flex mx-auto mt-16 items-center text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded text-sm">
						Clear Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
