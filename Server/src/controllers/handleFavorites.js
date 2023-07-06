
let myFavorites=[];

const postFav=(req, res)=>{
    
    const favorito=req.body;
    myFavorites.push(favorito);
    console.log(myFavorites);
    return res.status(200).json(myFavorites);
}

const deleteFav=(req,res)=>{
    const {id}=req.params;

    let newArray=myFavorites.filter(fav=>{
        return fav.id!==+id
    });
    myFavorites=newArray;
    console.log(myFavorites);
    return res.status(200).json(myFavorites);
}

module.exports={
    postFav,
    deleteFav
}