import SearchBar from "./searchBar.jsx"
import styled from "styled-components"



const NavbarStyle=styled.div`
border:1px solid white;
display:flex;
justify-content: flex-end;  
 `;


export default function Navbar(){return(
<NavbarStyle>
<SearchBar/>	

</NavbarStyle>



)}