const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

router.post('/create', createUserController);
router.get('/fetch', fetchUserController);

module.exports = router;

function createUserController(req, res){
    try {
        userService.createUser(req.body).then((data)=>{
            res.status(200).send(data);
        }).catch(error=>{
            res.status(400).send(error);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
        
    }
}

function fetchUserController(req, res){
    try {
        userService.fetchUser(req.query).then((data)=>{
            res.status(200).send(data);
        }).catch(error=>{
            res.status(400).send(error);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error);    
    }
}
