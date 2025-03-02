
const dbService = require('../common/dbService');
const driver = dbService.getDriver();

let service = {};

service.startNewGame = startNewGame;
service.getRandomCluesForUser = getRandomCluesForUser;
service.verifyAnswer = verifyAnswer;

async function startNewGame(reqObject) {
    try {
    let session = driver.session();
    let userId = reqObject.userId;
    let query = `create(gs:GameSession{gameSessionId:randomUUID(), prevDestinations:[], correctAnswerCount:0, inCorrectAnswerCount:0, totalScore:0, createdOn:datetime()}) with gs
    match(u:User{userId:$userId})with gs, u
    merge(u)-[:HAS_GAME_SESSION]->(gs)
    return properties(gs) as gameSession;
    `
    let result = await session.run(query, {userId});
    if(result.records.length>0)return result.records[0].get('gameSession');
    else return {};
    
    } catch (error) {
        console.log('Error in startNewGame function:', error);   
        return {}; 
    }
}

async function getRandomCluesForUser(reqObject) {

    try {

        let gameSessionId = reqObject.gameSessionId;
        let session = driver.session();
        let query = `match(gs:GameSession{gameSessionId:$gameSessionId})
       MATCH (d:Destination)  
       WHERE NOT d.destinationId IN gs.prevDestinations  
       WITH d, rand() AS r  
       ORDER BY r  
       LIMIT 4  

      WITH collect(d.city) AS answerOptions, 
      collect(properties(d)) AS dests  

return answerOptions, 
       CASE WHEN size(dests) > 0 
            THEN dests[toInteger(rand() * size(dests))] 
            ELSE NULL 
       END AS randomDest`
    let result  = await session.run(query, {gameSessionId});
    let response = {};
    if(result.records.length>0){
        let answerOptions = result.records[0].get('answerOptions');
        let randomDest = result.records[0].get('randomDest');
        response.clues = randomDest.clues;
        response.destinationId = randomDest.destinationId;
        response.answerOptions = answerOptions;
    }
    return response;

    } catch (error) {
        console.log('Error in getRandomCluesForUser:', error);
    }
}

async function verifyAnswer(reqObject){
    try {

        let {gameSessionId, destinationId, userId, selectedOption}  = reqObject;
        let session = driver.session();
        let query = `MATCH (d:Destination {destinationId: $destinationId})
WITH d 
MATCH (gs:GameSession {gameSessionId: $gameSessionId}) 
SET 
    gs.prevDestinations = coalesce(gs.prevDestinations, []) + [d.destinationId],
    gs.correctAnswerCount = CASE WHEN d.city = $selectedOption THEN gs.correctAnswerCount + 1 ELSE gs.correctAnswerCount END,
    gs.inCorrectAnswerCount = CASE WHEN d.city <> $selectedOption THEN gs.inCorrectAnswerCount + 1 ELSE gs.inCorrectAnswerCount END,
    gs.totalScore = gs.correctAnswerCount + CASE WHEN d.city = $selectedOption THEN 1 ELSE 0 END
WITH gs, d

MATCH (u:User {userId: $userId})
SET u.highestScore = CASE 
    WHEN u.highestScore IS NULL OR gs.totalScore > u.highestScore 
    THEN gs.totalScore 
    ELSE u.highestScore 
END 

RETURN 
    properties(d) AS destinationData, 
    properties(gs) AS gameSessionData, 
    u.highestScore AS highestScore
        `;
        let result = await session.run(query, {destinationId, gameSessionId, userId, selectedOption});
        if(result.records.length>0){
            let destinationData = result.records[0].get('destinationData');
            let gameSessionData = result.records[0].get('gameSessionData');
            let highestScore = result.records[0].get('highestScore');
            return {
                fun_fact:destinationData.fun_fact,
                trivia:destinationData.trivia,
                isCorrect:destinationData.city==selectedOption,
                correctAnswer:destinationData.city,
                gameSessionData:gameSessionData,
                highestScore:highestScore
            }

        }else{
           console.log('Error in verify answer')
           throw new Error("Error in verify answer");   
        }

    } catch (error) {
        console.log('Error in verifyAnswer:', error)
    }
}

module.exports = service;


