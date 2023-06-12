require('dotenv').config();
const axios=require("axios");
const {API_KEY} = process.env;
const {Videogame}=require("../db.js")

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
                                                       })      });

}    

let dataBd=await Videogame.findAll();
if(dataBd.length>1){return dataBd.concat(dataApiFormat)} else return dataApiFormat
     
}



let searchById=async(id)=>{
console.log(typeof id);


let dataApi=await getAllVideogames();
let result= dataApi.filter(ele=>ele.id==id);
const findBd=await Videogame.findByPk(id);
console.log(findBd);

if(result.length>0){return result}
   else 
if (findBd){return findBd }else return "no se encontro el videogame ";

}



module.exports={getAllVideogames,searchById}