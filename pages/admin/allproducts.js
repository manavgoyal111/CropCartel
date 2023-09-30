import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import mongoose from "mongoose";
import Product from "../../models/Product";
import theme from "../../admin/theme/theme";
import Products from "../../admin/components/dashboard/Products";
import FullLayout from "../../admin/layouts/FullLayout";

const AllProducts = ({ products }) => {
	return (
		<>
			<Head>
				<title>All Products | Dashboard | CropCartel</title>
				<meta name="description" content="CropCartel Dashboard page to show all Products" />
			</Head>

			<ThemeProvider theme={theme}>
				<FullLayout>
					<Grid container spacing={0}>
						<Grid item xs={12} lg={12}>
							<Products products={products} />
						</Grid>
					</Grid>
				</FullLayout>
			</ThemeProvider>
		</>
	);
};

export async function getServerSideProps(context) {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.MONGO_URI);
	}

	const products = await Product.find();

	return { props: { products: JSON.parse(JSON.stringify(products)) } };
}

export default AllProducts;
