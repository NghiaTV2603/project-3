import React, { Dispatch, SetStateAction } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { colors, Divider, Stack } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface SidebarChannelSettingProps {
   onIndex: Dispatch<SetStateAction<number>>;
}
function SidebarChannelSetting({ onIndex }: SidebarChannelSettingProps) {
   const styleTab = {
      height: 30,
      mr: 0.5,
      mt: 0.3,
      borderRadius: 1,
      color: colors.grey[500],
      '&:hover': {
         backgroundColor: colors.grey[800],
         color: colors.grey[200],
      },
      cursor: 'pointer',
   };
   const [index, setIndex] = React.useState(0);

   return (
      <Stack pr={1}>
         <Box
            height="100%"
            py={6}
            sx={{ display: 'flex', flexDirection: 'row-reverse' }}
         >
            <Box>
               <Box sx={{ width: 200 }}>
                  <Typography variant="h6">#General Text Channel</Typography>
               </Box>
               <Stack className="tabList">
                  <Stack
                     justifyContent="center"
                     sx={styleTab}
                     bgcolor={index === 0 ? colors.grey[800] : ''}
                     color={colors.grey[400]}
                     onClick={() => {
                        setIndex(0);
                        onIndex(0);
                     }}
                  >
                     <Typography
                        color={index === 0 ? colors.grey[100] : ''}
                        px={2}
                     >
                        Overview
                     </Typography>
                  </Stack>
                  <Stack
                     justifyContent="center"
                     sx={styleTab}
                     bgcolor={index === 1 ? colors.grey[800] : ''}
                     onClick={() => {
                        setIndex(1);
                        onIndex(1);
                     }}
                  >
                     <Typography
                        color={index === 1 ? colors.grey[100] : ''}
                        px={2}
                     >
                        Permissions
                     </Typography>
                  </Stack>
                  <Stack
                     justifyContent="center"
                     sx={styleTab}
                     bgcolor={index === 2 ? colors.grey[800] : ''}
                     onClick={() => {
                        setIndex(2);
                        onIndex(2);
                     }}
                  >
                     <Typography
                        color={index === 2 ? colors.grey[100] : ''}
                        px={2}
                     >
                        Invites
                     </Typography>
                  </Stack>
                  <Box py={1}>
                     <Divider color={colors.grey[400]} />
                  </Box>
                  <Stack
                     sx={styleTab}
                     direction="row"
                     alignItems="center"
                     pl={0.3}
                     justifyContent="space-between"
                  >
                     <Typography px={2}>Delete Channel</Typography>
                     <DeleteForeverIcon fontSize="small" />
                  </Stack>
               </Stack>
            </Box>
         </Box>
      </Stack>
   );
}

export default SidebarChannelSetting;
