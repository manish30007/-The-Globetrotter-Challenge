const express = require('express');
const router = express.Router();
const gameService = require('../services/game.service');


router.post('/startGame', startNewGameController);
router.get('/clues', getRandomCluesForUserController);
router.post('/verifyAnswer', verifyAnswerController);

module.exports = router;

function startNewGameController(req, res){
    try {
        gameService.startNewGame(req.body).then((data)=>{
            res.status(200).send(data);
        }).catch(error=>{
            res.status(400).send(error);
        });
    } catch (error) {
            console.log(error);
            res.status(400).send(error);
    }
}

function getRandomCluesForUserController(req, res){
    try {
        gameService.getRandomCluesForUser(req.query).then((data)=>{
            res.status(200).send(data);
        }).catch(error=>{
            res.status(400).send(error);
        });   
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

function verifyAnswerController(req, res){
    try {
        gameService.verifyAnswer(req.body).then((data)=>{
            res.status(200).send(data);
        }).catch(error=>{
            res.status(400).send(error);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
