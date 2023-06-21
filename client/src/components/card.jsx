import styled from "styled-components";
import{NavLink} from "react-router-dom"


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
	 <Datos><div><NavLink to={`/Detail/${props.videogame.id}`}>{props.videogame.name}</NavLink></div>
	 <Genres>{props.videogame.genres.map(genre=><div>{genre}</div>)}</Genres>
	 </Datos> 
</Container>

	)}
