const db = require('../config');

const User = db.collection('Users');

const register = async (data) => {
  await User.add(data);
  return true;
};

const getUserByEmail = async (email) => {
  const snapshot = await User.where('email', '==', email).limit(1).get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0];
};

module.exports = { register, getUserByEmail };
