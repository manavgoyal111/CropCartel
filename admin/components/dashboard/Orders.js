import React from "react";
import NextLink from "next/link";
import {
	Typography,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";

const Orders = ({ orders }) => {
	return (
		<BaseCard title="All Orders">
			<Table
				aria-label="simple table"
				sx={{
					whiteSpace: "nowrap",
				}}
			>
				<TableHead>
					<TableRow>
						<TableCell align="left">
							<Typography color="textSecondary" variant="h6">
								Name
							</Typography>
						</TableCell>
						<TableCell>
							<Typography color="textSecondary" variant="h6">
								Created At
							</Typography>
						</TableCell>
						<TableCell>
							<Typography color="textSecondary" variant="h6">
								Delivery Status
							</Typography>
						</TableCell>
						<TableCell>
							<Typography color="textSecondary" variant="h6">
								Payment Status
							</Typography>
						</TableCell>
						<TableCell align="right">
							<Typography color="textSecondary" variant="h6">
								Amount
							</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{orders.map((product) => (
						<TableRow key={product._id}>
							<TableCell>
								<NextLink href={`/order?id=${product._id}`}>
									<a className="flex justify-center font-bold">
										<Typography
											sx={{
												fontWeight: "600",
											}}
										>
											{product.name}
										</Typography>
									</a>
								</NextLink>
							</TableCell>
							<TableCell>
								<Typography>{product.updatedAt.slice(0, 10)}</Typography>
							</TableCell>
							<TableCell>
								<Typography>{product.deliveryStatus}</Typography>
							</TableCell>
							<TableCell>
								<Typography>{product.status}</Typography>
							</TableCell>
							<TableCell align="right">
								<Typography variant="h6">₹{product.amount / 100}</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</BaseCard>
	);
};

export default Orders;
