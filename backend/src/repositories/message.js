const db = require('../config');

const Message = db.collection('Messages');

const create = async (data) => {
  const { id, ...message } = data;
  await Message.doc(id).set(message);
  return data;
};

const getMessageByChannelId = async (serverId) => {
  const snapshot = await Message.where('serverId', '==', serverId).orderBy('createdAt', 'desc').get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

module.exports = { create, getMessageByChannelId };
