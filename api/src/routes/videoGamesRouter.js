const { Router } = require('express');
 const {getAllVideogamesHandler,searchByIdHandler,postVideogameHandler }=require("../handlers/videoGamesHandlers.js")

let videoGamesRouter=Router();

 videoGamesRouter.get("/", getAllVideogamesHandler);
 videoGamesRouter.get("/:id", searchByIdHandler);
 videoGamesRouter.post("",postVideogameHandler );




 module.exports=videoGamesRouter