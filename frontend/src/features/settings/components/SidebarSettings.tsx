import { Dispatch, SetStateAction, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Stack, useTheme } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { ColorPalette, tokens } from '../../../app/theme';
import { persistor } from '../../../app/store';
import { useAppSelector } from '../../../hooks/useRedux';

interface SidebarSettingProps {
   onIndex: Dispatch<SetStateAction<number>>;
   index: number;
}
function SidebarSetting({ onIndex, index }: SidebarSettingProps) {
   const { isLogin } = useAppSelector((state) => state.auth);
   const navigate = useNavigate();
   useEffect(() => {
      if (!isLogin) {
         navigate('/auth/login');
      }
   }, [isLogin]);
   const theme = useTheme();
   const colors: ColorPalette = tokens(theme.palette.mode);
   const styleTab = {
      height: 30,
      mr: 0.5,
      mt: 0.3,
      pr: 1,
      borderRadius: 1,
      color: colors.grey[500],
      '&:hover': {
         backgroundColor: colors.grey[800],
         color: colors.grey[200],
      },
      cursor: 'pointer',
   };
   return (
      <Stack pr={1}>
         <Box
            height="100%"
            py={6}
            sx={{ display: 'flex', flexDirection: 'row-reverse' }}
            color={colors.grey[200]}
         >
            <Box>
               <Stack sx={{ width: 200 }}>
                  <Typography fontSize={13} fontWeight={600}>
                     USER SETTINGS
                  </Typography>
               </Stack>
               <Stack className="tabList">
                  <Stack
                     justifyContent="center"
                     sx={styleTab}
                     bgcolor={index === 0 ? colors.grey[800] : ''}
                     color={colors.grey[400]}
                     onClick={() => {
                        onIndex(0);
                     }}
                  >
                     <Typography
                        color={index === 0 ? colors.grey[100] : ''}
                        px={2}
                     >
                        My Account
                     </Typography>
                  </Stack>
                  <Stack
                     justifyContent="center"
                     sx={styleTab}
                     bgcolor={index === 1 ? colors.grey[800] : ''}
                     onClick={() => {
                        onIndex(1);
                     }}
                  >
                     <Typography
                        color={index === 1 ? colors.grey[100] : ''}
                        px={2}
                     >
                        My Profiles
                     </Typography>
                  </Stack>
                  <Box py={1}>
                     <Divider color={colors.grey[600]} />
                  </Box>
                  <Stack
                     sx={styleTab}
                     direction="row"
                     alignItems="center"
                     justifyContent="space-between"
                     onClick={() => {
                        persistor.purge();
                        window.location.reload();
                     }}
                  >
                     <Typography px={2}>Log Out</Typography>
                     <LogoutIcon fontSize="small" />
                  </Stack>
               </Stack>
            </Box>
         </Box>
      </Stack>
   );
}

export default SidebarSetting;
