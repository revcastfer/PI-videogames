import styled from "styled-components"
import fondoHome from"../imgs/fondoHome.jpg"
import SearchBar from "./searchBar.jsx"
import Cards from "./cards.jsx"
import axios from "axios"
import {useState, useEffect } from "react";

const Fondo=styled.div`
background-image:url(${fondoHome});

background-attachment:fixed;
background-size:cover
 `;






export default function Home(){
let [data,setData]=useState();
useEffect(()=>{
axios("http://localhost:3001/videogames/")
.then(datos=>datos.data)
.then(data=>setData(data))

},[])

return(
<Fondo style={{height:data?"100%":"100vh"}}>
<SearchBar />
{data?<Cards data={data} />:<div>cargando</div>}




</Fondo>	)}