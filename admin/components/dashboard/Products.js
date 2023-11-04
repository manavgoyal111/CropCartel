import React from "react";
import Image from "next/image";
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

const Products = ({ products }) => {
	return (
		<BaseCard title="All Products">
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
								Title
							</Typography>
						</TableCell>
						<TableCell>
							<Typography color="textSecondary" variant="h6">
								Time Added
							</Typography>
						</TableCell>
						<TableCell>
							<Typography color="textSecondary" variant="h6">
								Image
							</Typography>
						</TableCell>
						<TableCell>
							<Typography color="textSecondary" variant="h6">
								Size/Color/Qty
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
						<TableRow key={product._id}>
							<TableCell>
								<NextLink href={`/product/${product.slug}`}>
									<a className="flex justify-center font-bold">
										<Typography
											sx={{
												fontWeight: "600",
											}}
										>
											{product.title} ({product.category})
										</Typography>
									</a>
								</NextLink>
							</TableCell>
							<TableCell>
								<Typography>{product.updatedAt ? product.updatedAt.slice(0, 10) : ""}</Typography>
							</TableCell>
							<TableCell>
								<Image src={product.img} alt="Product" height={40} width={40} />
							</TableCell>
							<TableCell>
								<Typography>
									{product.size}/{product.color}/{product.availableQty}
								</Typography>
							</TableCell>
							<TableCell align="right">
								<Typography variant="h6">₹{product.price}</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</BaseCard>
	);
};

export default Products;
