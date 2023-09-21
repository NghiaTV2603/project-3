import { Avatar, colors, Stack, Tooltip, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import InputChat from './components/InputChat';
import { useAppSelector } from '../../hooks/useRedux';
import messageSlice, { fetchMessage } from './messageSlice';

function Message() {
   const { currentChannel } = useAppSelector((state) => state.channel);
   const { currentServer } = useAppSelector((state) => state.server);
   const { user } = useAppSelector((state) => state.auth);
   const [chat, setChat] = useState<string[]>([]);
   const { messages } = useAppSelector((state) => state.message);
   const socket = io('http://localhost:5000');
   const dispatch = useDispatch();

   useEffect(() => {
      socket.emit('setup', user?.id);
      socket.on('connected', () => {
         console.log('connected 111');
      });
   }, []);

   useEffect(() => {
      if (currentChannel?.id) {
         socket.emit('joinChat', currentChannel?.id);
      }
   }, [currentChannel]);
   const handleMessage = (data) => {
      dispatch(messageSlice.actions.create(data));
      socket.emit('newMessage', data);
   };

   useEffect(() => {
      socket.on('message', (newMessage) => {
         console.log('--- message recievied', newMessage);
         if (newMessage?.sender?.id !== user?.id) {
            dispatch(messageSlice.actions.create(newMessage));
         }
      });
   }, [socket]);

   useEffect(() => {
      if (currentServer?.id) {
         dispatch(fetchMessage(currentServer?.id));
      }
   }, [currentServer]);

   return (
      <Stack direction="column" flexGrow={1}>
         <Stack
            flexGrow={1}
            direction="column-reverse"
            height="100%"
            sx={{ overflow: 'auto' }}
            spacing={1}
            p={2}
         >
            {messages.length !== 0 &&
               messages
                  .filter((message) => message.channelId === currentChannel?.id)
                  .map((message) => (
                     <Stack
                        direction={
                           message.sender.id === user.id ? 'row-reverse' : 'row'
                        }
                        spacing={1}
                     >
                        {message.sender.id !== user.id && (
                           <Tooltip title={message.sender?.username}>
                              <Avatar src={message.sender?.image} />
                           </Tooltip>
                        )}
                        <Stack direction="column">
                           {message.sender.id !== user.id && (
                              <Typography
                                 sx={{ marginLeft: 1 }}
                                 fontSize={14}
                                 fontWeight={600}
                              >
                                 {message.sender.username}
                              </Typography>
                           )}
                           <Stack
                              px={2}
                              py={1}
                              borderRadius={16}
                              maxWidth={400}
                              bgcolor={
                                 message.sender.id !== user.id
                                    ? colors.grey[700]
                                    : colors.blue[500]
                              }
                           >
                              <Typography>{message.content}</Typography>
                           </Stack>
                        </Stack>
                     </Stack>
                  ))}
         </Stack>
         <InputChat setChat={setChat} handleMessage={handleMessage} />
      </Stack>
   );
}

export default Message;
