import styled from "styled-components"
import fondoHome from"../imgs/fondoHome.jpg"
import NavBar from "./navbar.jsx"
import Cards from "./cards.jsx"
import axios from "axios"
import {NavLink} from "react-router-dom"
import {useState, useEffect } from "react";
import { useSelector } from 'react-redux'


const Fondo=styled.div`
background-image:url(${fondoHome});

background-attachment:fixed;
background-size:cover
 `;






export default function Home(){
let data=useSelector(state=>state.data)

return(
<Fondo style={{height:data?"100%":"100vh"}}>
<NavBar />
<NavLink to="/Formulario">CREAR VIDEOJUEGO</NavLink>
{data?<Cards data={data} />:<div>cargando</div>}




</Fondo>	)}