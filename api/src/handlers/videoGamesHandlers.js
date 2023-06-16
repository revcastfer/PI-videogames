const {getAllVideogames,searchById,searchByName,postVideogame}=require("../controllers/videoGamesControllers.js")

let getAllVideogamesHandler=async(req,res)=>{
let {name}=req.query;
if(name){
try{
let respuesta=await searchByName(name);
res.status(200).send(respuesta)	}
catch(error){res.status(500).json(error)}
}

else{
try{
let respuesta=await getAllVideogames();
res.status(200).send(respuesta)	
}
catch(error){res.status(500).json(error)}
}
};





let searchByIdHandler=async(req,res)=>{
let id=req.params.id;
try{
let respuesta=await searchById(id);
res.status(200).send(respuesta)	
}
catch(error){res.status(500).json(error)}

}



let postVideogameHandler=async(req,res)=>{
let {nombre,img,plataformas,descripcion,fecha,rating, generos}=req.body;
try{ 
	let respuesta= await postVideogame(nombre,img,plataformas,descripcion,fecha,rating, generos);
	res.status(200).send(respuesta) }
catch(error){res.status(500).send(error)}

}







module.exports={getAllVideogamesHandler,searchByIdHandler,postVideogameHandler}