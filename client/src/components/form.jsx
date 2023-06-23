import styled from "styled-components";
import{NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
import {useState} from "react"

const Marco=styled.div`
 `;

const GenresDiv=styled.div`
height:250px;
width:450px;
border: 2px solid black;
display:flex;
flex-wrap:wrap;
margin:auto;
overflow-y:auto;
 `;

 const GenresSelected=styled.div`
 display:inline;
 position:relative;
 padding:0px 10px 0px 10px;
 height:30px;
 margin:10px;
 border:none;
 border-radius:20px;
 background-color:#9DFEF4 `;

const Err=styled.label`
color:red;
 `


export default function Formulario(){
let data=useSelector(state=>state.data);
let genres=useSelector(state=>state.genres);
let [genresSelected,setGenresSelected]=useState([]);

let plataformas=[];
data.map(ele=>{ele.plataforms.forEach(pltf=>{if (!plataformas.includes(pltf)){plataformas.push(pltf) } }  )   });

let addGenres=(e)=>{
let valor=e.target.value;
if (!genresSelected.includes(valor)){
setGenresSelected([...genresSelected,e.target.value])}
}

let deleteGenre=(e)=>{   
   let newGenres=genresSelected.filter(ele=>ele!=e.target.id);
   setGenresSelected(newGenres)
}

let validate=(e)=>{

console.log(e.target.value)
}



return(
<Marco>
	
	<NavLink  to="/Home">BACK TO HOME</NavLink>


	<div ><input onChange={validate} type="text" id="nombre" placeholder="ingresar nombre" /><Err id="nombreError">debe llenar este campo..</Err></div>
    <div><input onChange={validate} type="text" id="img" placeholder="ingresar url de imagen"/><Err id="imgError">debe ingtresar la url</Err></div>
    <div><textarea onChange={validate}  id="descripcion" cols="30" rows="10" placeholder="ingresar descripcion "/><Err style={{margin:"auto"}} id="descripcionError">debe ingresar una descripcion</Err></div>
    <div><input onChange={validate} type="text" id="clasificacion" placeholder="ingresar clasificacion de 0 a 5"/><Err id="clasificacionError">debe colocar una clasificacion</Err></div>
    <div><label>Fecha de lanzamiento:</label><input onChange={validate} id="date" type="date" /><Err id="dateError">selecionar fecha</Err></div>
    <div><select id="plataforma" onChange={validate}  >
    <option  disabled selected value>selecionar plataforma</option>
    {plataformas.map(ele=><option value={ele}>{ele}</option> ) }</select> <Err id="plataformaError">seleccionar plataforma</Err></div>
    
    <div><select id="genres" onChange={addGenres}>
    <option  disabled selected value>selecionar genero</option>
    {genres.map(ele=><option value={ele}>{ele}</option> ) }</select><Err id="genresError" >seleccionar genero</Err> </div>

    <GenresDiv>
        {genresSelected?genresSelected.map(genre=><GenresSelected>
            <div style={{display:"inline"}}>{genre}</div>
            <div style={{display:"inline",padding:"0px 5px 0px 15px"}}><sup id={genre} onClick={deleteGenre} >x</sup></div>
        </GenresSelected>):null}
    </GenresDiv>



</Marco>

	)}