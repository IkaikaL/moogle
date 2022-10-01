import React from "react";
import { Container, Grid, Typography, Button, Link } from "@mui/material";
import { Notifications, AccountCircle, ViewQuilt } from "@mui/icons-material";

type Props = {};
const Header = (props: Props) => {
	return (
		<Container
			sx={{ width: "1000px", height: "50px", backgroundColor: "#fe5f55" }}
		>
			<Grid
				container
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				sx={{ height: "100%", width: "100%" }}
			>
				<Grid item>
					<Typography color='white'>Moogle</Typography>
				</Grid>
				<Grid item sx={{ color: "white" }}>
					<Link
						href='https://cdn.discordapp.com/attachments/1025257534384255007/1025869387296681994/unknown.png'
						color='#fe5f55'
					>
						{"nash moment"}
					</Link>
					<Button color='inherit'>
						<ViewQuilt />
					</Button>
					<Button color='inherit'>
						<Notifications />
					</Button>
					<Button color='inherit'>
						<AccountCircle />
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Header;
