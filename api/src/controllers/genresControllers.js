const {Genres}=require("../db.js")


let getAllGenres=async()=>{

let allgenresBd=await Genres.findAll();
console.log(allgenresBd);

let allgenesdata=[];
allgenresBd.map(ele=>allgenesdata.push(ele.name));
return allgenesdata


}


module.exports=getAllGenres