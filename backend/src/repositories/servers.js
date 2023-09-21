const db = require('../config');
const generateRandomString = require('../help/generateRadomString');
const image = require('../asset/imageServer');

const Server = db.collection('Servers');

const create = async (data) => {
  const code = generateRandomString(12);
  const randomNumber = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
  const { id } = await Server.add({ ...data, code, image: image[randomNumber] });
  return {
    id, ...data, code, image: image[randomNumber]
  };
};

const generateCode = async (serverId) => {
  const code = generateRandomString(12);
  await Server.doc(serverId).update({ code });
  return code;
};

const joinServer = async (userId, code) => {
  const querySnapshot = await Server.where('code', '==', code).get();
  const serverDoc = querySnapshot.docs[0];
  if (!serverDoc) return;
  const serverRef = serverDoc.ref;
  const userIds = serverDoc.data().userIds || [];
  if (!userIds.includes(userId)) {
    userIds.push(userId);
    await serverRef.update({ userIds });
  }
  return { id: serverDoc.id, ...serverDoc.data(), userIds };
};

const getServerByEmail = async (email) => {
  const snapshot = await Server.where('email', '==', email).limit(1).get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const getServerByUserId = async (userId) => {
  const snapshot = await Server.where('userIds', 'array-contains', userId).get();
  const results = [];
  snapshot.forEach((doc) => {
    const serverData = doc.data();
    const serverId = doc.id;
    const serverWithId = { id: serverId, ...serverData };
    results.push(serverWithId);
  });

  return results;
};

module.exports = {
  create, getServerByEmail, getServerByUserId, generateCode, joinServer
};
