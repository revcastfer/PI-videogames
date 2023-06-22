const initialState={data:[],genres:[]};


export default function videogameReducer(state=initialState,action){
switch(action.type){
case "login":
	return {...state,data:action.payload}
case "loginGenres":
	return {...state,genres:action.payload}

default:
	return {state}


}




}