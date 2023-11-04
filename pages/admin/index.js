import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import mongoose from "mongoose";
import Order from "../../models/Order";
import theme from "../../admin/theme/theme";
import SalesOverview from "../../admin/components/dashboard/SalesOverview";
import DailyActivity from "../../admin/components/dashboard/DailyActivity";
import FullLayout from "../../admin/layouts/FullLayout";

const Index = ({ orders }) => {
	const router = useRouter();

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
