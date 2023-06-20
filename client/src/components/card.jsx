import styled from "styled-components";
import axios from "axios";

const Container=styled.div`
color:white;
height:135px;
display:flex;


  `;

const Image=styled.img`

 `;

 const Datos=styled.div`
color:white;
justify-content:center `;

const Genres=styled.div`
 color:yellow`;

export default function Card(props){


return(
<Container>
	
	<Image src={props.videogame.img}/>
	 <Datos><div>{props.videogame.name}</div>
	 <Genres>{props.videogame.genres.map(genre=><div>{genre}</div>)}</Genres>
	 </Datos> 
</Container>

	)}
