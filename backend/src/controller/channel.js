const ChannelRepository = require('../repositories/channel');

const ChannelController = {
  create: async (req, res) => {
    try {
      const data = await ChannelRepository.create(req.body);
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
      const data = await ChannelRepository.getChannelByServerId(serverId);
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

module.exports = ChannelController;
