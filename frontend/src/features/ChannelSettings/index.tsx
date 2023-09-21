import React from 'react';
import { Grid, IconButton, Stack, useTheme } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import { ColorPalette, tokens } from '../../app/theme';
import SidebarChannelSetting from './components/SidebarChannelSetting';
import ContentChannelSetting from './components/ContentChannelSetting';

function ChannelSetting() {
   const navigate = useNavigate();
   const theme = useTheme();
   const colors: ColorPalette = tokens(theme.palette.mode);
   const [index, setIndex] = React.useState(0);
   const handleEsc = () => {
      navigate('/');
   };

   return (
      <Stack height="100vh" flexDirection="row">
         <Grid direction="row" container>
            <Grid item xs={3.5} bgcolor={colors.grey[900]}>
               <SidebarChannelSetting onIndex={setIndex} />
            </Grid>
            <Grid item xs={8.5} bgcolor={colors.grey[850]}>
               <Stack flexDirection="row">
                  <Grid item xs={8}>
                     <ContentChannelSetting index={index} />
                  </Grid>
                  <Grid item xs={4}>
                     <Stack
                        sx={{
                           color: colors.grey[500],
                           position: 'absolute',
                        }}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        pt={6}
                        onClick={handleEsc}
                     >
                        <IconButton>
                           <HighlightOffIcon fontSize="large" />
                        </IconButton>
                        <Typography fontWeight={700}>ESC </Typography>
                     </Stack>
                  </Grid>
               </Stack>
            </Grid>
         </Grid>
      </Stack>
   );
}
export default ChannelSetting;
