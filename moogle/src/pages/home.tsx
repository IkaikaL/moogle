import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import SmallCard from "../components/smallCard";

const home = () => {
	return (
		<Container sx={{}}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
			>
				<Grid
					item
					sx={{
						height: "1000px",
						width: "1000px",
						backgroundColor: "gray",
						paddingTop: "50px",
					}}
				>
					<SmallCard />
				</Grid>
				<Grid item>
					<Box></Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default home;
