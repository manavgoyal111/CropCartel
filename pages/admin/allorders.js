import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import mongoose from "mongoose";
import Order from "../../models/Order";
import theme from "../../admin/theme/theme";
import Orders from "../../admin/components/dashboard/Orders";
import FullLayout from "../../admin/layouts/FullLayout";

const AllOrders = ({ orders }) => {
	return (
		<>
			<Head>
				<title>All Orders | Dashboard | CropCartel</title>
				<meta name="description" content="CropCartel Dashboard page to show all Orders" />
			</Head>

			<ThemeProvider theme={theme}>
				<FullLayout>
					<Grid container spacing={0}>
						<Grid item xs={12} lg={12}>
							<Orders orders={orders} />
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

	const orders = await Order.find();

	return { props: { orders: JSON.parse(JSON.stringify(orders)) } };
}

export default AllOrders;
