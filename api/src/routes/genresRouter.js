const { Router } = require('express');
const getAllGenresHandler=require('../handlers/genresHandler.js');


let genresRouter=Router();

genresRouter.get("/",getAllGenresHandler);


module.exports=genresRouter


