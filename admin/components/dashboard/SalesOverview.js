import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, Typography, Box, Select, MenuItem } from "@mui/material";
import BaseCard from "../baseCard/BaseCard";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesOverview = ({ orders }) => {
	const [selectedData, setSelectedData] = useState([]);
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
	const [seriessalesoverview, setSeriessalesoverview] = useState([{
		name: "Sale",
		data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	}])

	useEffect(() => {
		updateDataForYear(selectedYear);
		setSeriessalesoverview([{
			name: "Sale",
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		}])

		for (let i = 0; i < 10; i++) {
			setSeriessalesoverview((prevState) => [
				{
					...prevState[0],
					data: prevState[0].data.map((value, index) =>
						index === i ? 0 : value
					),
				},
			])
		}

		for (let i = 0; i < 10; i++) {
			let element = selectedData[i];
			if (element !== undefined) {
				setSeriessalesoverview((prevState) => [
					{
						...prevState[0],
						data: prevState[0].data.map((value, index) =>
							index === formatDate(element.updatedAt) ? value + element.amount / 100 : value
						),
					},
				])
			}
		}
	}, [selectedYear, selectedData])

	const updateDataForYear = (year) => {
		// console.log(Number(year), selectedData, orders);
		selectedData = orders.filter((order) => {
			const createdYear = new Date(order.createdAt).getFullYear();
			console.log(createdYear);
			return createdYear === Number(year);
		});
	};

	const formatDate = (value) => {
		return new Date(value).getMonth("en-IN", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		})
	}

	const optionssalesoverview = {
		grid: {
			show: true,
			borderColor: "transparent",
			strokeDashArray: 2,
			padding: {
				left: 0,
				right: 0,
				bottom: 0,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "42%",
				endingShape: "rounded",
				borderRadius: 5,
			},
		},

		colors: ["#3CB371", "#87CEEB"],
		fill: {
			type: "solid",
			opacity: 1,
		},
		chart: {
			offsetX: -15,
			toolbar: {
				show: false,
			},
			foreColor: "#adb0bb",
			fontFamily: "'DM Sans',sans-serif",
			sparkline: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		markers: {
			size: 0,
		},
		legend: {
			show: false,
		},
		xaxis: {
			type: "category",
			categories: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"July",
				"Aug",
				"Sept",
				"Oct",
				"Nov",
				"Dec",
			],
			labels: {
				style: {
					cssClass: "grey--text lighten-2--text fill-color",
				},
			},
		},
		yaxis: {
			show: true,
			min: 100,
			max: 2000,
			tickAmount: 3,
			labels: {
				style: {
					cssClass: "grey--text lighten-2--text fill-color",
				},
			},
		},
		stroke: {
			show: true,
			width: 5,
			lineCap: "butt",
			colors: ["transparent"],
		},
		tooltip: {
			theme: "dark",
		},
	};

	return (
		<BaseCard title="Sales Overview">
			<Select
				value={selectedYear}
				onChange={(e) => setSelectedYear(e.target.value)}
			>
				<MenuItem value="2024">2024</MenuItem>
				<MenuItem value="2023">2023</MenuItem>
				<MenuItem value="2022">2022</MenuItem>
				<MenuItem value="2021">2021</MenuItem>
			</Select>

			<Chart
				options={optionssalesoverview}
				series={seriessalesoverview}
				type="bar"
				height="295px"
			/>
		</BaseCard>
	);
};

export default SalesOverview;
