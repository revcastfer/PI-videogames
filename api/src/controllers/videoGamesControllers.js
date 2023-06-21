require('dotenv').config();
const axios=require("axios");
const {API_KEY} = process.env;
const {Videogame,Genres}=require("../db.js")

let getAllVideogames=async()=>{

let dataApiFormat=[];
for(let i=1;i<6;i++){
let dataApi=await axios("https://api.rawg.io/api/games?key="+API_KEY+"&&page="+i);
dataApi.data.results.forEach(elemento=>{dataApiFormat.push({id:elemento.id,
                                                       name:elemento.name,
                                                       img:elemento.background_image,
                                                       plataforms:elemento.platforms.map(plt=>plt.platform.name),
                                                       released:elemento.released,
                                                       rating: elemento.rating,
                                                       genres:elemento.genres.map(gen=>gen.name)
                                                       }) });

}    

let dataBd=await Videogame.findAll();
if(dataBd.length>1){return dataBd.concat(dataApiFormat)} else return dataApiFormat
     
}



let searchById=async(id)=>{
let dataApi=await getAllVideogames();
let result= dataApi.filter(ele=>ele.id==id);
const findBd=await Videogame.findByPk(id);


if(result.length>0){return result}
   else 
if (findBd){return findBd }else throw new Error("no se encontro el videogame");
}





let searchByName=async(name)=>{

let dataApi=await getAllVideogames();
let result= dataApi.filter(ele=>ele.name==name);
const findBd=await Videogame.findOne({ where: { name: name } });
console.log(typeof findBd);

if(result||findBd[0]!=null){return result.concat(findBd)}else return "sin datos encontrados"

}


let postVideogame=async(nombre,descripcion,plataformas,img,fecha,rating, generos)=>{
 if( nombre&&descripcion&&plataformas&&img&&fecha&&rating&&generos)


try{
let nuevoVideogame= await Videogame.create({name:nombre,description:descripcion,plataforms:plataformas,image:img,date:fecha,rating:rating });
let arrayGeneros=generos.split(",");

arrayGeneros.forEach( async genero=>{
    let finder = await Genres.findOne({where:{name:genero}});   
    nuevoVideogame.addCountry(finder) })
}
catch(error){throw new Error(error)}

}
module.exports={getAllVideogames,searchById,searchByName,postVideogame}