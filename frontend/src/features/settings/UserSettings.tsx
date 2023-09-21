import { Stack, Grid, useTheme, IconButton, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ColorPalette, tokens } from '../../app/theme';
import SidebarSetting from './components/SidebarSettings';
import ContentSetting from './components/ContentSetting';

export default function UserSettings() {
   const navigate = useNavigate();
   const theme = useTheme();
   const colors: ColorPalette = tokens(theme.palette.mode);
   const [index, setIndex] = useState(0);
   const handleEsc = () => {
      console.log('111');
      navigate('/');
   };
   return (
      <Stack height="100vh" flexDirection="row">
         <Grid direction="row" container>
            <Grid item xs={3.5} bgcolor={colors.grey[900]}>
               <SidebarSetting onIndex={setIndex} index={index} />
            </Grid>
            <Grid item xs={8.5} bgcolor={colors.grey[850]}>
               <Stack flexDirection="row">
                  <Grid item xs={8}>
                     <ContentSetting index={index} />
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
