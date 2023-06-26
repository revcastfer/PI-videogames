import styled from "styled-components"
import Card from"./card.jsx"


export default function Cards(props){
console.log(props);
return(<div>
	{props.data.map(videogame=><Card videogame={videogame}/>)}
</div>


	)}