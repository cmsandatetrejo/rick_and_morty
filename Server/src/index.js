const server=require('./app'); //config del server
const PORT=3001;
const {conn}= require('./DB_connection'); //config de la BD

server.listen(PORT,async()=>{
    console.log("server raised in port:"+PORT);
    await conn.sync({force:true})
});



/*const http = require("http");  
const {getCharById}= require("./controllers/getCharById.js");

const PORT = 3001;

http.createServer((req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');

        
        if(req.url.includes('/rickandmorty/character')){
            const id = req.url.split('/').at(-1);
           
            getCharById(res,+id);
            

        }

    })
    .listen(PORT,"localhost")*/