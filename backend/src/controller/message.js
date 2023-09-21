const MessageRepository = require('../repositories/message');

const MessageController = {
  create: async (req, res) => {
    try {
      const data = await MessageRepository.create(req.body);
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
      const { serverId } = req.query;
      console.log('---', serverId);
      const data = await MessageRepository.getMessageByChannelId(serverId);
      console.log('data ---- ', data);
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
  }
};

module.exports = MessageController;
