const {getAllVideogames,searchById}=require("../controllers/videoGamesControllers.js")

let getAllVideogamesHandler=(req,res)=>{

try{
let respuesta=getAllVideogames();
res.status(200).send(respuesta)	
}
catch(error){res.status(500).send(error)}

};





let searchByIdHandler=(req,res)=>{

try{
let respuesta=searchById(req.id);
res.status(200).send(respuesta)	
}
catch(error){res.status(500).send(error)}

}



module.exports={getAllVideogamesHandler,searchByIdHandler}