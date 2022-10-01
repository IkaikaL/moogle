import React from "react";
import { Card, Container, Grid, Avatar, Typography, Box } from "@mui/material";

const smallCard = () => {
	return (
		<Container>
			<Card>
				<Grid
					container
					direction='column'
					justifyContent='center'
					alignItems='center'
				>
					<Grid item>
						<Grid
							container
							direction='row'
							justifyContent='space-between'
							alignItems='center'
						>
							<Grid item>
								<Card>
									<Avatar></Avatar>
								</Card>
							</Grid>
							<Grid item>
								<Typography></Typography>
								<Typography></Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Box></Box>
						<Typography></Typography>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
};

export default smallCard;
