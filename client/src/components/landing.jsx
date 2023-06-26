import imgLanding from "../imgs/imgLanding.jpg";
import user from "../imgs/user.png";
import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {useDispatch} from 'react-redux'
const Titulo=styled.label`

 `;
const Carga=styled.div`
font-size:100px;
color:yellow;
visibility:hidden
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
let dispatch=useDispatch();


let cargaDatos=async()=>{
  document.getElementById("carga").style.visibility="visible";
  let dataApi=await axios("http://localhost:3001/videogames/");
  let dataApigenres=await axios("http://localhost:3001/genres");
  let data=dataApi.data;  
  let genres=dataApigenres.data;


  await dispatch({type:"login",payload:data});
  await dispatch({type:"loginGenres",payload:genres})
};


let intoApp=async(e)=>{e.preventDefault();await cargaDatos();navigate("/Home")}



let displayPanel=async()=>{	
let panel=document.getElementById("panel");
 panel.style.display===""||panel.style.display==="none"?panel.style.display="block":panel.style.display="none"
};



return(
<FondoLanding>	
	<PanelLoguin id="panel">
	<Titulo></Titulo>

	<form onSubmit={intoApp}>
		<InputStyle id="inputUser" type="text"  placeholder="nombre usuario"/>
		<LoguinButton id="buttonLogin" type="submit">ingresar</LoguinButton>
	</form>
	</PanelLoguin>
  <Carga id="carga"><i>Cargando.....</i></Carga>
<UserImage src={user} alt="imagen de usuario" onClick={displayPanel} style={{right:"25px",top:"15px"}}/>
</FondoLanding>
	)}