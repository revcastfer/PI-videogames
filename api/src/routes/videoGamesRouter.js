const { Router } = require('express');
 const {getAllVideogamesHandler,searchByIdHandler}=require("../handlers/videoGamesHandlers.js")

let videoGamesRouter=Router();

 videoGamesRouter.get("/", getAllVideogamesHandler);
 videoGamesRouter.get("/:id", getAllVideogamesHandler);



 module.exports=videoGamesRouter