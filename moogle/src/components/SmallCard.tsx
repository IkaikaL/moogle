import React from "react";
import {
	Card,
	Container,
	Grid,
	Avatar,
	Typography,
	Button,
	Box,
	Divider,
} from "@mui/material";

type Props = {
	Icon: any;
	purpose?: string;
	content: string;
	SmallIcon?: any;
	details: string;
	secondDetails?: string;
};

const SmallCard = (props: Props) => {
	const { Icon, purpose, content, SmallIcon, details, secondDetails } = props;

	return (
		<Container
			sx={{ minHeight: "100px", minWidth: "200px" }}
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
				}}
			>
				<Grid item sx={{ height: "50%", width: "100%" }}>
					<Grid
						container
						direction='row'
						justifyContent='space-between'
						alignItems='center'
						sx={{ width: "90%", margin: 0 }}
					>
						<Grid
							item
							sx={{ marginTop: "-50px", height: "70px", width: "70px" }}
						>
							<Card sx={{ height: "100%", width: "100%" }}>
								<Icon sx={{ height: "100%", width: "100%" }} />
							</Card>
						</Grid>
						<Grid item sx={{ margin: "10px", width: "50%" }}>
							<Typography sx={{ fontSize: 18 }}>{purpose}</Typography>
							<Typography sx={{ fontSize: 20 }}>{content}</Typography>
						</Grid>
						<Grid item sx={{ height: "2px", width: "100%" }}>
							<Divider variant='fullWidth' />
						</Grid>
					</Grid>
				</Grid>
				<Grid item sx={{ width: "100%", margin: "10px" }}>
					<Grid
						container
						direction='column'
						justifyContent='flex-start'
						alignItems='flex-start'
					>
						{SmallIcon === undefined ? null : (
							<Grid item>
								<Box>
									<SmallIcon />
								</Box>
							</Grid>
						)}
						<Grid item>
							<Typography>{details}</Typography>
							<Typography>{secondDetails}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default SmallCard;
