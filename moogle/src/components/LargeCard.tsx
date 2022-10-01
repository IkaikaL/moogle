import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

type Props = {
	image: any;
	details: string;
	detailsHeader: string;
};

const LargeCard = (props: Props) => {
	const { image, details, detailsHeader } = props;

	return (
		<Container
			sx={{ minHeight: "150px", minWidth: "300px" }}
			disableGutters={true}
		>
			<Grid
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
				sx={{
					backgroundColor: "white",
					borderRadius: 1,
					height: "100%",
					width: "100%",
				}}
			>
				<Grid
					item
					sx={{
						paddingTop: "10px",
						borderRadius: 1,
						marginLeft: "-20px",
					}}
				>
					<img src={image} alt='test' height='200px' width='280px' />
				</Grid>
				<Grid item sx={{ width: "100%", margin: "10px" }}>
					<Grid
						container
						direction='column'
						justifyContent='center'
						alignItems='flex-start'
					>
						<Grid>
							<Typography>{detailsHeader}</Typography>
						</Grid>
						<Grid item>
							<Typography>{details}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default LargeCard;
