import styled from "styled-components";
import {useState, useEffect } from "react";
import axios from "axios";

const Container=styled.div`
color:white `;

export default function Card(){
const [data,setData]=useState([]);

useEffect(()=>{
axios("http://localhost:3001/videogames/")
.then(datos=>datos.data)
.then(datos=>{setData(datos[0]);console.log(data)})

},[])


return(
<Container>
	card
</Container>

	)}
