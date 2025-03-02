
const dbService = require('../common/dbService');
const driver = dbService.getDriver();

let service = {};
service.createUser = createUser;
service.fetchUser = fetchUser;

module.exports = service;

async function createUser(reqObject){
    const session = driver.session();
    try {
      const query = `
        CREATE (u:User {
          userId: randomUUID(),      
          username: $username,
          highestScore:0
        })
        RETURN u
      `;
  
      const result = await session.run(query, {
        username: reqObject.username,
      });
  
      if (!result.records.length) {
        throw new Error('Failed to create user');
      }

      return result.records[0].get('u').properties;
      
    } catch (error) {
      console.error('Service Error :', error);
      throw error;
    } finally {
      await session.close();
    }
}

async function fetchUser(reqObject){
  const session = driver.session();
  try {
    const query = `
      MATCh (u:User {
        userId: $userId
      })
      RETURN u
    `;

    const result = await session.run(query, {
      userId: reqObject.userId
    });

    if (!result.records.length) {
      throw new Error('Failed to create user');
    }

    return result.records[0].get('u').properties;
    
  } catch (error) {
    console.error('Service Error :', error);
    throw error;
  } finally {
    await session.close();
  }
}