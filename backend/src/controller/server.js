const serverRepository = require('../repositories/servers');

const ServerController = {
  create: async (req, res) => {
    try {
      const data = await serverRepository.create(req.body);
      return res.json({
        data,
        success: true
      });
    }
    catch (e) {
      console.log('error create server', e);
      return res
        .status(500)
        .json({ message: 'Server error' });
    }
  },
  get: async (req, res) => {
    try {
      const { userId } = req.query;
      const data = await serverRepository.getServerByUserId(userId);
      return res.json({
        data,
        success: true
      });
    }
    catch (e) {
      console.log('error getByUser server', e);
      return res
        .status(500)
        .json({ message: 'Server error' });
    }
  },
  generateCode: async (req, res) => {
    const { serverId } = req.query;
    const code = await ServerController.generateCode(serverId);
    return res.json({
      code
    });
  },
  joinServer: async (req, res) => {
    const { code, userId } = req.body;
    const server = await serverRepository.joinServer(userId, code);
    console.log(server);
    return res.json(
      { data: server, success: true }
    );
  }
};

module.exports = ServerController;
