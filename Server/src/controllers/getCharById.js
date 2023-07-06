const axios=require("axios");
const URL="https://rickandmortyapi.com/api/character/";
const STATE_OK=200;
const STATE_ERROR=404;

const getCharById= async (req,res)=>{
    try {
        let {id}=req.params;
        const {data}=await axios(`${URL}/${id}`)
        
            if(!data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`);
           
               const character={
                    id: data.id,
                    name: data.name,
                    species: data.species,
                    origin: data.origin,
                    image: data.image,
                    gender: data.gender,
                    status: data.status
               }
                return res.status(200).json(character)
                                
    } catch (error) {
        return error.message.includes('ID')
        ?res.status(404).send(error.message)
        :res.status(500).send(error.response.data.error)
    }
}

module.exports={
    getCharById
}




/*const axios=require("axios");
const getCharById=(res, id)=>{
     
    
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>response.data)
    .then((data)=>{
        const character={
            id: id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        return res.writeHead(200,{"Content-type":"application/jason"})
               .end(JSON.stringify(character)) 
    })
    .catch((error)=>{
        return res.writeHead(500,{"Content-type":"text/plain"})
               .end(error.message)
    })
}

module.exports={
    getCharById
};*/