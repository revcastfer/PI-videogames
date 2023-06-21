import styled from"styled-components"

const Marco=styled.div`


 `;
const InputName=styled.input`
border-radius:25px;
border:none;
width:300px;
height:30px

 `;


export default function SearchBar(){

	return(
		<Marco>
			<InputName type="text" placeholder="    ingresar nombre de usuario"/>
		</Marco>
		)}