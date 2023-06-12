const { Router } = require('express');
 const {getAllVideogamesHandler,searchByIdHandler}=require("../handlers/videoGamesHandlers.js")

let videoGamesRouter=Router();

 videoGamesRouter.get("/", getAllVideogamesHandler);
 videoGamesRouter.get("/:id", searchByIdHandler);



 module.exports=videoGamesRouter