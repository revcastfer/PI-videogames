import styled from "styled-components"
import fondoHome from"../imgs/fondoHome.jpg"
import SearchBar from "./searchBar.jsx"
import Cards from "./cards.jsx"

const Fondo=styled.div`
background-image:url(${fondoHome});
height:100vh;
background-size:cover;
 `;





export default function Home(){
return(
<Fondo>
<SearchBar />
<Cards  />





</Fondo>	)}