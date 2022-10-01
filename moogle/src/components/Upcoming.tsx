import React from "react";
import { useState } from "react";
import {
	Container,
	Grid,
	Button,
	Card,
	Typography,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from "@mui/material";

type Props = {
	assignment: Array<Array<string>>;
	classes: Array<string>;
};
const Upcoming = (props: Props) => {
	const [currentClass, setCurrentClass] = useState(0);
	const [checked, setChecked] = useState(false);
	const handleClick = () => setChecked(false);
	const { assignment, classes } = props;
	console.log(checked);
	return (
		<Container sx={{ width: "100%", height: "300px" }}>
			<Grid
				container
				direction='column'
				justifyContent='flex-start'
				alignItems='center'
				sx={{}}
			>
				<Grid item sx={{ height: "50px", width: "450px" }}>
					<Card>
						<Grid
							container
							direction='row'
							justifyContent='space-evenly'
							alignItems='center'
						>
							<Grid item>
								<Typography>Classes:</Typography>
							</Grid>
							<Grid item>
								<Button
									color='inherit'
									onClick={() => {
										setCurrentClass(0);
										handleClick();
									}}
								>
									{classes[0]}
								</Button>
							</Grid>
							<Grid item>
								<Button
									color='inherit'
									onClick={() => {
										setCurrentClass(1);
										handleClick();
									}}
								>
									{classes[1]}
								</Button>
							</Grid>
							<Grid item>
								<Button
									color='inherit'
									onClick={() => {
										setCurrentClass(2);
										handleClick();
									}}
								>
									{classes[2]}
								</Button>
							</Grid>
						</Grid>
					</Card>
				</Grid>
				<Grid item sx={{ height: "200px", width: "900px" }}>
					<Card>
						<Typography sx={{ margin: "10px" }}>Assignments:</Typography>
						<List>
							<ListItem>
								<FormGroup>
									<FormControlLabel
										control={
											<Checkbox
												value={checked}
												onChange={() => {
													handleClick();
												}}
											/>
										}
										label={assignment[currentClass].at(0)}
									/>
								</FormGroup>
							</ListItem>
							<ListItem>
								<FormGroup>
									<FormControlLabel
										control={<Checkbox value={checked} />}
										label={assignment[currentClass].at(1)}
									/>
								</FormGroup>
							</ListItem>
							<ListItem>
								<FormGroup>
									<FormControlLabel
										control={<Checkbox value={checked} />}
										label={assignment[currentClass].at(2)}
									/>
								</FormGroup>
							</ListItem>
							<ListItem>
								<FormGroup>
									<FormControlLabel
										control={<Checkbox value={checked} />}
										label={assignment[currentClass].at(3)}
									/>
								</FormGroup>
							</ListItem>
						</List>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Upcoming;
