import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import SmallCard from "../components/SmallCard";
import LargeCard from "../components/LargeCard";
import Header from "../components/Header";
import Upcoming from "../components/Upcoming";
import TestImage from "../assets/test.jpeg";
import MoogleLogo from "../assets/moogle.jpg";
import {
	AccountBox,
	Construction,
	Task,
	CalendarMonth,
} from "@mui/icons-material";

const home = () => {
	const classes = ["WMN 1001", "ABC 1001", "AUS 1001"];
	const assignments = [
		["Visit Nash", "Ask Nash why he's running", "Catch Nash", "Release Nash"],
		["Acquire women", "Study (optional)", "Chase people", "Find predatory cow"],
		[
			"run from predatory cow",
			"run from predatory cow",
			"run from predatory cow",
			"run from predatory cow",
		],
	];
	return (
		<Container
			sx={{ width: "1000px", height: "950px", backgroundColor: "#333333" }}
			disableGutters={true}
		>
			<Grid
				container
				direction='column'
				justifyContent='flex-start'
				alignItems='center'
				sx={{ width: "100%", height: "100%" }}
			>
				<Grid item sx={{ minWidth: "100%", backgroundColor: "#fe5f55" }}>
					<Header />
				</Grid>
				<Grid item sx={{ width: "100%", height: "200px", paddingTop: "50px" }}>
					<Grid
						container
						direction='row'
						alignItems='center'
						justifyContent='space-evenly'
						sx={{}}
					>
						<Grid item>
							<SmallCard
								content='Profile'
								Icon={AccountBox}
								details='GPA: 4.0'
								secondDetails='LSU ID: 891231234'
							/>
						</Grid>
						<Grid item>
							<SmallCard
								content='TigerWare'
								Icon={Construction}
								details='(225)-578-375'
								secondDetails='webmaster@lsu.edu'
							/>
						</Grid>
						<Grid item>
							<SmallCard
								content='Transcript'
								Icon={Task}
								details='Year: Senior'
								secondDetails='Total Hours: 50'
							/>
						</Grid>
						<Grid item>
							<SmallCard
								content='Schedule'
								Icon={CalendarMonth}
								details='Next: Acquiring Women'
								secondDetails='Due: Self-Assessment'
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item sx={{ width: "100%", height: "300px" }}>
					<Grid
						container
						direction='row'
						alignItems='center'
						justifyContent='space-evenly'
						sx={{}}
					>
						<Grid item>
							<LargeCard
								detailsHeader='Acquiring Women 101 (WMN 1001)'
								details='Learn to talk to females'
								image={MoogleLogo}
							/>
						</Grid>
						<Grid item>
							<LargeCard
								detailsHeader="ABC's for Dummies (ABC 1001)"
								details='Illiterate?'
								image={MoogleLogo}
							/>
						</Grid>
						<Grid item>
							<LargeCard
								detailsHeader='Acclimating to the USA (AUS 1001)'
								details='How to jog without looking vulnerable'
								image={MoogleLogo}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item sx={{ width: "100%", height: "350px" }}>
					<Upcoming classes={classes} assignment={assignments} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default home;
