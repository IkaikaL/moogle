import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import SmallCard from "../components/smallCard";
import TestImage from "../assets/test.jpeg";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

const home = () => {
	return (
		<Container
			sx={{ width: "100%", height: "100%", backgroundColor: "gray" }}
			disableGutters={true}
		>
			<Grid
				container
				direction='row'
				alignItems='center'
				justifyContent='center'
				sx={{
					height: "500px",
					width: "300px",
					paddingTop: "50px",
					backgroundColor: "red",
				}}
			>
				<Grid item sx={{}}>
					<SmallCard
						purpose='test'
						content='testing'
						details='testtest'
						icon={AcUnitIcon}
						smallIcon={AcUnitIcon}
					/>
				</Grid>
				<Grid item>
					<Box></Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default home;
