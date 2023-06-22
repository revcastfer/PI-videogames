import styled from "styled-components";
import{NavLink} from "react-router-dom"
import { useSelector } from 'react-redux'

const Marco=styled.div`
 `;

const GenresSelected=styled.div`
height:150px;
width:40%;
border: 2px solid black
 `;

export default function Formulario(){
let data=useSelector(state=>state.data);
let genres=useSelector(state=>state.genres);

let plataformas=[];
data.map(ele=>{ele.plataforms.forEach(pltf=>{if (!plataformas.includes(pltf)){plataformas.push(pltf) } }  )   });


return(
<Marco>
	form
	<NavLink to="/Home">BACK TO HOME</NavLink>


	<div><input type="text" placeholder="ingresar nombre" /></div>
    <div><input type="text" placeholder="ingresar url de imagen"/></div>
    <div><textarea  id="" cols="30" rows="10" placeholder="ingresar descripcion "/></div>
    <div><input type="text" placeholder="ingresar clasificacion"/></div>
    <div><label>Fecha de lanzamiento:</label><input type="date" /></div>
    <div><select >
    <option value="">selecionar plataforma</option>
    {plataformas.map(ele=><option value={ele}>{ele}</option> ) }</select> </div>
    
    <div><select >
    <option value="">selecionar genero</option>
    {genres.map(ele=><option value={ele}>{ele}</option> ) }</select> </div>
    <GenresSelected></GenresSelected>



</Marco>

	)}