import React from "react";
import {
	Typography,
	Box,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Chip,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";

const Products = ({products}) => {
	return (
		<BaseCard title="Product Perfomance">
			<Table
				aria-label="simple table"
				sx={{
					mt: 3,
					whiteSpace: "nowrap",
				}}
			>
				<TableHead>
					<TableRow>
						<TableCell>
							<Typography color="textSecondary" variant="h6">
								Title
							</Typography>
						</TableCell>
						<TableCell>
							<Typography color="textSecondary" variant="h6">
								Slug
							</Typography>
						</TableCell>
						<TableCell>
							<Typography color="textSecondary" variant="h6">
								Image
							</Typography>
						</TableCell>
						<TableCell>
							<Typography color="textSecondary" variant="h6">
								Size/Color
							</Typography>
						</TableCell>
						<TableCell align="right">
							<Typography color="textSecondary" variant="h6">
								Price
							</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products.map((product) => (
						<TableRow key={product.name}>
							<TableCell>
								<Typography
									sx={{
										fontSize: "15px",
										fontWeight: "500",
									}}
								>
									{product.id}
								</Typography>
							</TableCell>
							<TableCell>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<Box>
										<Typography
											variant="h6"
											sx={{
												fontWeight: "600",
											}}
										>
											{product.name}
										</Typography>
										<Typography
											color="textSecondary"
											sx={{
												fontSize: "13px",
											}}
										>
											{product.post}
										</Typography>
									</Box>
								</Box>
							</TableCell>
							<TableCell>
								<Typography color="textSecondary" variant="h6">
									{product.pname}
								</Typography>
							</TableCell>
							<TableCell>
								<Chip
									sx={{
										pl: "4px",
										pr: "4px",
										backgroundColor: product.pbg,
										color: "#fff",
									}}
									size="small"
									label={product.priority}
								></Chip>
							</TableCell>
							<TableCell align="right">
								<Typography variant="h6">${product.budget}k</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</BaseCard>
	);
};

export default Products;
