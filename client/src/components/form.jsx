import styled from "styled-components";
import{NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
import {useState} from "react"
import axios from "axios"

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
visibility:hidden
 `

const Send=styled.button`
 `


export default function Formulario(){
let data=useSelector(state=>state.data);
let genres=useSelector(state=>state.genres);
let [genresSelected,setGenresSelected]=useState([]);
let [verification,setVerification]=useState({nombre:false,descripcion:false,plataforma:false,img:false,date:false,clasificacion:false, genres:false})

let plataformas=[];
data.map(ele=>{ele.plataforms.forEach(pltf=>{if (!plataformas.includes(pltf)){plataformas.push(pltf)}})});

let visible=(nombre,valor)=>{document.getElementById(nombre+"Error").style.visibility=valor};

let addGenres=(e)=>{
let valor=e.target.value;
if (!genresSelected.includes(valor)){
setGenresSelected([...genresSelected,e.target.value])};
console.log(genresSelected);
if(genresSelected.length==0){visible("genres","visible");setVerification({...verification,genres:false}) }else{visible("genres","hidden");setVerification({...verification,genres:true})}
}

let deleteGenre=(e)=>{   
   let newGenres=genresSelected.filter(ele=>ele!=e.target.id);
   setGenresSelected(newGenres);
   console.log(genresSelected);
   if(genresSelected.length==0){setVerification({...verification,genres:false})}
}

let validate=(e)=>{
let elemento=e.target;
if(elemento.value===""){visible(elemento.id,"visible");setVerification({...verification,[elemento.id]:false}) }else{visible(elemento.id,"hidden");setVerification({...verification,[elemento.id]:true})};
switch(elemento.id){
case "img":
    let url= /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  if(!url.test(elemento.value)){visible(elemento.id,"visible");setVerification({...verification,[elemento.id]:false}) }else{visible(elemento.id,"hidden");setVerification({...verification,[elemento.id]:true})}
break;
case "clasificacion":
  if(elemento.value>0 && elemento.value<=5){visible(elemento.id,"hidden");setVerification({...verification,[elemento.id]:true})}else {visible(elemento.id,"visible");setVerification({...verification,[elemento.id]:false})}
}  }

let submit=(e)=>{
e.preventDefault();
let ready=Object.keys(verification);

let readyForSend=()=>{
let indicador=0;
  ready.forEach(value=>{if(verification[value]===false){visible(value,"visible");indicador++}});
  if(indicador>0){alert(`hay ${indicador} campos a revisar, verifique la informacion colocada`);return false}else{return true} 
}


if(readyForSend()){
try{
axios.post ("http://localhost:3001/videogames/",{nombre:document.getElementById("nombre").value ,
                                                 descripcion:document.getElementById("descripcion").value,
                                                 plataformas:document.getElementById("plataforma").value,
                                                 img:document.getElementById("img").value,
                                                 fecha:document.getElementById("date").value,
                                                 rating:document.getElementById("clasificacion").value,
                                                 generos:genresSelected}   )
}
catch(error){console.log(error)}

} }


return(
<Marco>
	
	<NavLink  to="/Home">BACK TO HOME</NavLink>

    <form onSubmit={submit}>
	<div ><input onChange={validate} type="text" id="nombre" placeholder="ingresar nombre" /><Err id="nombreError">debe llenar este campo..</Err></div>
    <div><input onChange={validate} type="text" id="img" placeholder="ingresar url de imagen"/><Err id="imgError">debe ingresar la url</Err></div>
    <div><textarea onChange={validate}  id="descripcion" cols="30" rows="10" placeholder="ingresar descripcion "/><Err style={{margin:"auto"}} id="descripcionError">debe ingresar una descripcion</Err></div>
    <div><input onChange={validate} type="text" id="clasificacion" placeholder="ingresar clasificacion 0 a 5"/><Err id="clasificacionError">debe colocar una clasificacion</Err></div>
    <div><label>Fecha de lanzamiento:</label><input onChange={validate} id="date" type="date" /><Err id="dateError">selecionar fecha</Err></div>
    <div><select id="plataforma" onChange={validate}  >
    <option  disabled selected value>selecionar plataforma</option>
    {plataformas.map(ele=><option value={ele}>{ele}</option> ) }</select> <Err id="plataformaError">seleccionar plataforma</Err></div>
    
    <div><select id="genres" onChange={addGenres}>
    <option  disabled selected value>selecionar genero(s)</option>
    {genres.map(ele=><option value={ele}>{ele}</option> ) }</select><Err id="genresError" >seleccionar por lo menos un genero</Err> </div>

    <GenresDiv>
        {genresSelected?genresSelected.map(genre=><GenresSelected>
            <div style={{display:"inline"}}>{genre}</div>
            <div style={{display:"inline",padding:"0px 5px 0px 15px"}}><sup id={genre} onClick={deleteGenre} >x</sup></div>
        </GenresSelected>):null}
    </GenresDiv>
    <Send type="submit">enviar</Send>
    </form>



</Marco>

	)}