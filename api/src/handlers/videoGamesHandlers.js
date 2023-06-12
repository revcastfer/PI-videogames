const {getAllVideogames,searchById}=require("../controllers/videoGamesControllers.js")

let getAllVideogamesHandler=async(req,res)=>{

try{
let respuesta=await getAllVideogames();
res.status(200).send(respuesta)	
}
catch(error){res.status(500).json(error)}

};





let searchByIdHandler=async(req,res)=>{
let id=req.params.id;
try{
let respuesta=await searchById(id);
res.status(200).send(respuesta)	
}
catch(error){res.status(500).json(error)}

}



module.exports={getAllVideogamesHandler,searchByIdHandler}