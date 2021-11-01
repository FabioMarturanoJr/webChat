const mongoConnect = require('./connection');

const saveMessage = async ({ message, nickname, timestamp }) => {
  try {
    const MessagesCollection = await mongoConnect()
      .then((db) => db.collection('messages'));
      await MessagesCollection.insertOne({ message, nickname, timestamp });    
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  const MessagesCollection = await mongoConnect()
    .then((db) => db.collection('messages'));

  const messages = await MessagesCollection.find().toArray();

  return { messages };
};

module.exports = {
  saveMessage,
  getAll,
};
