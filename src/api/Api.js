const API_KEY = "43e0d976-6845-4843-8044-5501e6d2c8bc";

// get all the matches [upcoming matches]
export const getMatches=()=>{
const url = `https://api.cricapi.com/v1/matches?apikey=${API_KEY}`;

return fetch(url)
.then((response)=> response.json())
.catch((error)=>console.log("ERROR: ", error))
};
//Load match details
export const getMatchDetail=(id)=>{
const url = `https://api.cricapi.com/v1/cricketScror?apikey=${API_KEY}&=id${id}`;
return fetch(url)
.then((respone)=>respone.json())
.catch((error)=>console.log(error));
}