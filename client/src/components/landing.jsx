import imgLanding from "../imgs/imgLanding.jpg";
import user from "../imgs/user.png";
import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {useDispatch} from 'react-redux'
const Titulo=styled.label`

 `;

const FondoLanding=styled.div`
height:100vh;
background-image:url(${imgLanding});
background-size:100%;
 `;

 const UserImage=styled.img`
 position:absolute;
 border-radius:45px;
 height:40px;
 width:40px; 
 border:2px solid white;
 hover 
  `;

const PanelLoguin=styled.div`
background-color:rgba(255, 255, 255,0.1);
backdrop-filter: blur(10px);
box-shadow:0 10px 20px 5px rgba(0,0,0,0.3);
position:absolute;
right:0px;
border-radius:0px 0px 0px 25px;
display:none

 `;

const InputStyle=styled.input`
border-radius:25px;
display:block;
border:none;
margin:80px 10px 10px 10px
 `;


 const LoguinButton=styled.button`
display:block;
border-radius:25px;
width:90%;
border:none;
margin:0px 10px 20px 10px
  `;

export default function Landing(){
const navigate=useNavigate();
let intoApp=()=>{navigate("Home" )}
let dispatch=useDispatch();


let cargaDatos=async()=>{
  let dataApi=await axios("http://localhost:3001/videogames/");
  let data=dataApi.data;
  let dataApigenres=await axios("http://localhost:3001/genres");
  let genres=dataApigenres.data;


  dispatch({type:"login",payload:data});
  dispatch({type:"loginGenres",payload:genres})
};

let displayPanel=()=>{	
let panel=document.getElementById("panel");
cargaDatos();
 panel.style.display===""||panel.style.display==="none"?panel.style.display="block":panel.style.display="none"
};



return(
<FondoLanding>	
	<PanelLoguin id="panel">
	<Titulo></Titulo>

	<form>
		<InputStyle id="inputUser" type="text"  placeholder="nombre usuario"/>
		<LoguinButton id="buttonLogin" onClick={intoApp} >ingresar</LoguinButton>
	</form>
	</PanelLoguin>
<UserImage src={user} alt="imagen de usuario" onClick={displayPanel} style={{right:"25px",top:"15px"}}/>
</FondoLanding>
	)}