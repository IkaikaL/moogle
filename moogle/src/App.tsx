import React from "react";
import Home from "./pages/home";
import { Container } from "@mui/material";

function App() {
	return (
		<Container sx={{ minWidth: "100%", backgroundColor: "#222222" }}>
			<Home />
		</Container>
	);
}

export default App;
