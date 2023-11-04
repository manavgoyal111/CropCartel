import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import {
	Grid,
	Stack,
	TextField,
	Button,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BaseCard from "../../admin/components/baseCard/BaseCard";
import FullLayout from "../../admin/layouts/FullLayout";
import theme from "../../admin/theme/theme";

const AddProd = () => {
	const router = useRouter();

	const [form, setForm] = useState({
		title: "",
		slug: "",
		desc: "",
		img: "",
		category: "",
		price: "",
		availableQty: "",
		size: "",
		color: "",
	});

	useEffect(() => {
		const getUser = async () => {
			const res = await fetch(
				process.env.NODE_ENV === "development"
					? `${process.env.NEXT_PUBLIC_HOST}/api/getuser`
					: `${process.env.NEXT_PUBLIC_HOST}/api/getUser`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ token: localStorage.getItem("token") }),
				}
			);
			const userRes = await res.json();
			if (userRes.success) {
				if (!userRes.data.admin) {
					router.push("/");
				}
			} else {
				router.push("/");
			}
		};
		getUser();
	}, []);

	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const submitForm = async (e) => {
		e.preventDefault();

		const settings = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: form.title,
				slug: form.slug,
				desc: form.desc,
				img: form.img,
				category: form.category,
				price: form.price,
				availableQty: form.availableQty,
				size: form.size,
				color: form.color,
			})
		};

		const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, settings);
		const response = await res.json();

		if (response.success) {
			toast.success("Product Added!", {
				position: "top-left",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setForm({
				title: "",
				slug: "",
				desc: "",
				img: "",
				category: "",
				price: "",
				availableQty: "",
				size: "",
				color: "",
			})
		} else {
			toast.error("Error Occurred!", {
				position: "top-left",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	return (
		<>
			<Head>
				<title>Add Product | Admin | Uniconnect</title>
				<meta name="description" content="Admin Dashboard page for adding Product" />
			</Head>

			<ToastContainer
				position="top-left"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			<ThemeProvider theme={theme}>
				<FullLayout>
					<Grid container spacing={0}>
						<Grid item xs={12} lg={12}>
							<BaseCard title="Add a new Product" className="text-green-500">
								<Stack spacing={1}>
									<TextField
										value={form.title}
										onChange={onChange}
										name="title"
										label="Title"
										variant="outlined"
									/>
									<TextField
										value={form.slug}
										onChange={onChange}
										name="slug"
										label="Slug"
										variant="outlined"
									/>
									<TextField
										value={form.desc}
										onChange={onChange}
										name="desc"
										label="Description"
										multiline
										rows={3}
									/>
									<TextField
										value={form.category}
										onChange={onChange}
										name="category"
										label="Category"
										variant="outlined"
									/>
									<TextField
										value={form.price}
										onChange={onChange}
										name="price"
										label="Price"
										variant="outlined"
									/>
									<TextField
										value={form.availableQty}
										onChange={onChange}
										name="availableQty"
										label="Available Quantity"
										variant="outlined"
									/>
									<TextField
										value={form.size}
										onChange={onChange}
										name="size"
										label="Size"
										variant="outlined"
									/>
									<TextField
										value={form.color}
										onChange={onChange}
										name="color"
										label="Color"
										variant="outlined"
									/>
									{/* <Button
										variant="contained"
										component="label"
										sx={{ display: form.img !== "" ? "none" : "block" }}
									>
										Upload Image
										<input
											type="file"
											value={form.img}
											onChange={onChange}
											name="img"
											label="Image"
											hidden
										/>
									</Button> */}
									<TextField
										value={form.img}
										onChange={onChange}
										name="img"
										label="Image"
										variant="outlined"
									// sx={{ display: form.img === "" ? "none" : "" }}
									/>
								</Stack>
								<br />
								<Button onClick={submitForm} variant="outlined" mt={2}>
									Submit
								</Button>
							</BaseCard>
						</Grid>
					</Grid>
				</FullLayout>
			</ThemeProvider>
		</>
	);
};

export default AddProd;
