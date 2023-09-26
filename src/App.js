import { Grid, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Comm from "./Componten/Comm";
import Navbar from "./Componten/Navbar";
import { getMatches } from "./api/Api";
const App= ()=>{
const [data, setData]=useState([])
useEffect(()=>{
getMatches()
.then((data)=>{
setData(data.data)
console.log(data.data)
})
.catch((error)=>alert("colud not load data"))
},[])
return(
<div className="App">
<Navbar/>
<Typography variant="h3"style={{marginTop:20}}>Live Score Match App</Typography>
<Grid container>
<Grid sm="2"></Grid>
<Grid sm="8">
{data.map((match)=>(
<Fragment key={match.id}>
{match.type="Twenty20" ? (
<Comm key={match.id} match={match}/>
) : (
''
)}
</Fragment>
))}
</Grid>
</Grid>
</div>
)
}
export default App;
