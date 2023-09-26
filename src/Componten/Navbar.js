import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
const Navbar=()=>{
return(
<AppBar position="static">
<Toolbar>
<IconButton color="inherit">
<MenuIcon/>
</IconButton>
<Typography variant="h6">Live Score</Typography>
</Toolbar>
</AppBar>
)
}

export default Navbar;