const db = require('../config');

const Channel = db.collection('Channels');

const create = async (data) => {
  const { id } = await Channel.add(data);
  return { id, ...data };
};

const getChannelByServerId = async (serverId) => {
  const snapshot = await Channel.where('serverId', '==', serverId).get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

module.exports = { create, getChannelByServerId };
