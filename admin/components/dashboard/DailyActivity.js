import React, { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BaseCard from "../baseCard/BaseCard";

const DailyActivity = ({ orders }) => {
	const [activities, setActivities] = useState([{
		time: "09.50",
		text: "Meeting with John",
	},])

	const formatDate = (value) => {
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
			timeZoneName: "short",
		};

		return new Date(value).toLocaleString("en-IN", options);
	}

	useEffect(() => {
		setActivities([])
		for (let i = 0; i < orders.length && i < 10; i++) {
			let element = orders[i];
			if (element !== undefined) {
				setActivities((prevState) => [
					...prevState,
					{
						time: formatDate(element.updatedAt),
						text: element.email
					},
				])
			}
		}
	}, [])

	return (
		<BaseCard title="Daily Activity">
			<Timeline
				sx={{
					paddingLeft: 5,
				}}
			>
				{activities.map((activity) => (
					<TimelineItem key={activity.time}>
						<TimelineOppositeContent
							sx={{
								fontSize: "12px",
								fontWeight: "700",
								flex: "0",
								marginRight: 5,
								minWidth: "350px",
							}}
						>
							{activity.time}
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot
								variant="outlined"
								sx={{
									borderColor: "success.main",
								}}
							/>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent
							color="text.secondary"
							sx={{
								fontSize: "14px",
							}}
						>
							{activity.text}
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</BaseCard>
	);
};

export default DailyActivity;
