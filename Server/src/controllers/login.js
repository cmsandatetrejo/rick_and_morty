const usuarios=require("../utils/users");

const login=(req,res)=>{
    let {email,password}=req.query;

    let userFound=usuarios.find(user=>user.email===email&&user.password===password);

    if(userFound) return res.status(200).json({acces:true});
    return res.status(200).json({acces:false});
  
}

module.exports={
    login
};