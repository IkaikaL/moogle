import React from "react";
import { Card, Container, Grid, Avatar, Typography, Box } from "@mui/material";
import TestImage from "../assets/test.jpeg";

const smallCard = () => {
	return (
		<Container sx={{ width: "200px", height: "100px" }}>
			<Grid
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
				sx={{ backgroundColor: "white", borderRadius: 1 }}
			>
				<Grid item sx={{ width: "80%" }}>
					<Grid
						container
						direction='row'
						justifyContent='space-between'
						alignItems='center'
					>
						<Grid
							item
							sx={{ marginTop: "-50px", height: "50px", width: "50px" }}
						>
							<Card sx={{ height: "100%", width: "100%" }}>
								<Avatar sx={{ height: "100%", width: "100%" }}></Avatar>
							</Card>
						</Grid>
						<Grid item>
							<Typography>DEEZ</Typography>
							<Typography>DEEZ</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item sx={{ justifyContent: "flex-start" }}>
					<Box>
						<Avatar></Avatar>
					</Box>
					<Typography>DEEZ</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default smallCard;
