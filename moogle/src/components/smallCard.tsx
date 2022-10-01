import React from "react";
import {
	Card,
	Container,
	Grid,
	Avatar,
	Typography,
	Box,
	Divider,
} from "@mui/material";

type Props = {
	icon: string;
	purpose: string;
	content: string;
	smallIcon: string;
	details: string;
};

const smallCard = (props: Props) => {
	const { icon, purpose, content, smallIcon, details } = props;

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
								<Avatar
									sx={{ height: "100%", width: "100%" }}
									src={icon}
									alt='icon'
								/>
							</Card>
						</Grid>
						<Grid item sx={{ margin: "10px" }}>
							<Typography sx={{ fontSize: 20 }}>{purpose}</Typography>
							<Typography sx={{ fontSize: 25 }}>{content}</Typography>
						</Grid>
						<Grid item sx={{ height: "10px", width: "100%" }}>
							<Divider variant='fullWidth' />
						</Grid>
					</Grid>
				</Grid>
				<Grid item sx={{ width: "100%", margin: "10px" }}>
					<Grid
						container
						direction='row'
						justifyContent='flex-start'
						alignItems='center'
					>
						<Grid item>
							<Box>
								<Avatar src={smallIcon} alt='small icon' />
							</Box>
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

export default smallCard;
