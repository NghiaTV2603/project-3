const userRepository = require('../repositories/user');
// const { getUserByEmail } = require('../repositories/user');

const UserController = {
  register: async (req, res) => {
    try {
      const { username, password, email } = req.body;
      console.log(username, password, email);
      if (!username || !password || !email) {
        return res
          .status(400)
          .json({ message: 'Please enter all the fields 1' });
      }
      // const hashedPassword = 'nghia';
      const success = await userRepository.register(req.body);
      return res.json({ success });
    }
    catch (e) {
      console.log('error register', e);
      return res
        .status(500)
        .json({ message: 'Server error' });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const data = await userRepository.getUserByEmail(email);
      console.log(data);
      if (password !== data.password) {
        return res.status(400)
          .json({ message: 'Please enter all the fields' });
      }
      return res.json(data);
    }
    catch (e) {
      console.log('error login', e);
      return res
        .status(500)
        .json({ message: 'Server error' });
    }
  }
};

module.exports = UserController;
