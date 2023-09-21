import React from 'react';
import { Avatar, IconButton, Stack, Typography, useTheme } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import MicOffIcon from '@mui/icons-material/MicOff';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../../../app/theme';
import { useAppSelector } from '../../../hooks/useRedux';

function OptionUser() {
   const theme = useTheme();
   const [mic, setMic] = React.useState<boolean>(true);
   const [headphone, setHeadphone] = React.useState<boolean>(true);
   const colors = tokens(theme.palette.mode);
   const navigate = useNavigate();
   const { user } = useAppSelector((state) => state.auth);
   return (
      <Stack
         p={1}
         py={1.2}
         bgcolor={colors.grey[850]}
         borderLeft={0.1}
         borderColor={colors.grey[900]}
         direction="row"
         justifyContent="space-between"
         alignItems="center"
         color={colors.grey[200]}
      >
         <Stack direction="row" alignItems="center" spacing={0.5}>
            <Avatar sx={{ height: 32, width: 32 }} src={user?.image} />
            <Typography fontSize={13} fontWeight={600}>
               {user?.username}
            </Typography>
         </Stack>
         <Stack direction="row">
            <IconButton size="small" onClick={() => setMic(!mic)}>
               {mic ? <MicIcon /> : <MicOffIcon />}
            </IconButton>
            <IconButton size="small" onClick={() => setHeadphone(!headphone)}>
               {headphone ? <HeadsetIcon /> : <HeadsetOffIcon />}
            </IconButton>
            <IconButton size="small" onClick={() => navigate('/user-settings')}>
               <SettingsIcon />
            </IconButton>
         </Stack>
      </Stack>
   );
}

export default OptionUser;
