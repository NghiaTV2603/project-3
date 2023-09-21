const bodyParser = require('body-parser');
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const morgan = require('morgan');
const cors = require('cors');
const socket = require('socket.io');

const userRouter = require('./routes/user');
const serverRouter = require('./routes/server');
const channelRouter = require('./routes/channel');
const messageRouter = require('./routes/message');
const MessageRepository = require('./repositories/message');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/api', userRouter);
app.use('/api/server', serverRouter);
app.use('/api/channel', channelRouter);
app.use('/api/message', messageRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

const io = socket(server, {
  pingTimeout: 60000,
  cors: {
    // origin: 'https://app-social.vercel.app',
    origin: '*'
  }
});
// eslint-disable-next-line no-shadow
io.on('connection', (socket) => {
  console.log('connected socket.io');

  socket.on('setup', (dataUser) => {
    socket.join(dataUser);
    console.log(`setup ${dataUser}`);
    socket.emit('connected');
  });

  socket.on('joinChat', (chatId) => {
    const id = chatId;
    socket.join(id);
    console.log(`connected rom chat : ${id}`);
  });

  socket.on('newMessage', async (newMessage) => {
    console.log(newMessage);
    console.log('sent chat room', newMessage.channelId);
    socket.in(newMessage.channelId).emit('message', newMessage);
    await MessageRepository.create(newMessage);
  });
});
