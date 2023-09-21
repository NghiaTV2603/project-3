import { IconButton, Stack, useTheme } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import CodeIcon from '@mui/icons-material/Code';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ColorPalette, tokens } from '../../../app/theme';
import { useAppSelector } from '../../../hooks/useRedux';

function InputChat({ setChat, handleMessage }) {
   const { currentChannel } = useAppSelector((state) => state.channel);
   const { user } = useAppSelector((state) => state.auth);
   const { currentServer } = useAppSelector((state) => state.server);
   const theme = useTheme();
   const [input, setInput] = useState('');
   const colors: ColorPalette = tokens(theme.palette.mode);
   const handleChat = () => {
      setChat((prev) => [...prev, input]);
      setInput('');
   };

   const handleEnterPress = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
         const newMessage = {
            sender: user,
            channelId: currentChannel?.id,
            serverId: currentServer?.id,
            content: input,
            id: uuidv4(),
            createdAt: new Date(),
         };
         handleMessage(newMessage);
         setInput('');
      }
   };
   return (
      <Stack
         mx={2}
         mb={2}
         px={2}
         py={1}
         borderRadius={4}
         bgcolor={colors.grey[850]}
         direction="row"
         justifyContent="space-between"
      >
         <InputBase
            disabled={!currentChannel?.id}
            sx={{ flex: 1 }}
            multiline
            placeholder="Message…"
            inputProps={{ 'aria-label': 'search' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleEnterPress}
         />
         <Stack direction="row" alignItems="center">
            <IconButton>
               <CodeIcon />
            </IconButton>
            <IconButton onClick={handleChat}>
               <SentimentSatisfiedIcon />
            </IconButton>
         </Stack>
      </Stack>
   );
}

export default InputChat;
