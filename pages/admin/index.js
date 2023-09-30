import Head from "next/head";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import FullLayout from "../../src/layouts/FullLayout";

const Index = () => {
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
							<SalesOverview />
						</Grid>
						<Grid item xs={12} lg={4}>
							<DailyActivity />
						</Grid>
						<Grid item xs={12} lg={12}>
							<BlogCard />
						</Grid>
					</Grid>
				</FullLayout>
			</ThemeProvider>
		</>
	);
};

export default Index;
