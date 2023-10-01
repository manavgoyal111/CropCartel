import Head from "next/head";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import mongoose from "mongoose";
import Order from "../../models/Order";
import theme from "../../admin/theme/theme";
import SalesOverview from "../../admin/components/dashboard/SalesOverview";
import DailyActivity from "../../admin/components/dashboard/DailyActivity";
import FullLayout from "../../admin/layouts/FullLayout";

const Index = ({ orders }) => {
	return (
		<>
			<Head>
				<title>Dashboard | CropCartel</title>
				<meta name="description" content="CropCartel Dashboard" />
			</Head>

			<ThemeProvider theme={theme}>
				<FullLayout>
					<Grid container spacing={0}>
						<Grid item xs={12} lg={12}>
							<SalesOverview orders={orders} />
						</Grid>
						<Grid item xs={12} lg={12}>
							<DailyActivity orders={orders} />
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

export default Index;
