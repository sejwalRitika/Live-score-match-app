import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import { getMatchDetail } from "../api/Api";
const Comm=({match})=>{
const [detail, setDetail]=useState({});
const [open, setOpen]=useState(false)
const handleClick=(id)=>{
getMatchDetail(id)
.then((data)=>{
console.log("MATCH DATA", data)
setDetail(data);
handleOpen();
})
.catch((error)=>console.log(error))
};
const getMatchcart=()=>{
return(
<Card style={{marginTop:20}}>
<CardContent>
<Grid container justifyContent="center" alignItems="center" spacing={4}> 
<Grid item>
<Typography variant="h6">{match["teams"]}</Typography>
</Grid>
<Grid item>
<img style={{width:40}} 
src={require("../img/vs png.png")} alt=""/>
</Grid>
<Grid item>
<Typography variant="h6">{match["teams"]}</Typography>
</Grid>
</Grid>
</CardContent>
<CardActions>
<Grid container justifyContent="center">
<Button onClick={()=>{
handleClick(match.id)
}} 
item variant="outlined" color="primary">
Show Delails
</Button>
<Button style={{marginLeft: 5}}item variant="outlined" color="primary">
Start Time {new Date(match.dateTimeGMT).toLocaleString()}
</Button>
</Grid>
</CardActions>
</Card>
)
};

const handleClose=()=>{
setOpen(false);
};
const handleOpen=()=>{
setOpen(true);
}
const getDialog = () => (
<Dialog open={open} onClose={handleClose}>
<DialogTitle id="alert-dialog-title">{"Match Detail.."}</DialogTitle>
<DialogContent>
<DialogContentText id="alert-dialog-description">
<Typography>{detail.status}</Typography>
<Typography>
Match
<span style={{fontStyle:"italic", fontWeight:"bold"}}>
{detail.matchStarted? "Started": "Still not started"}{""}
</span>
</Typography>
<Typography>
Score
<span style={{fontStyle:"italic", fontWeight:"bold"}}>
{detail.Score}
</span>
</Typography>
</DialogContentText>
</DialogContent>
<DialogActions>
<Button onClick={handleClose}color="primary" autoFocus>
Close
</Button>
</DialogActions>
</Dialog>
)
return (
<Fragment>
{getMatchcart()}
{getDialog()}
</Fragment>
);
}

export default Comm;