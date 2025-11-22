const r=require('express').Router();
const auth=require('../middlewares/auth.middleware');

r.use(auth);

r.get('/',(req,res)=>res.json({ok:true,mensaje:'Canciones',usuario:req.usuario}));

module.exports=r;
