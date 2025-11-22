const r=require('express').Router();
const c=require('../controllers/user.controller');

r.post('/registro',c.registro);
r.post('/login',c.login);

module.exports=r;
