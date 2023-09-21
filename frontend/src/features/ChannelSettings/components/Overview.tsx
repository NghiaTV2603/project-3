import { Stack, Typography, Input, useTheme } from '@mui/material';
import React from 'react';
import { ColorPalette, tokens } from '../../../app/theme';

function Overview() {
   const theme = useTheme();
   const colors: ColorPalette = tokens(theme.palette.mode);
   const [nameChannel, setNameChannel] = React.useState('General');
   const handleSetNameChannel = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNameChannel(e.target.value);
   };
   return (
      <Stack py={2} color={colors.grey[400]}>
         <Stack width="100%" color={colors.grey[100]}>
            <Typography variant="h6">Overview</Typography>
         </Stack>
         <Stack pt={3}>
            <Typography fontSize={13}>CHANNEL NAME</Typography>
            <Input
               value={nameChannel}
               onChange={handleSetNameChannel}
               sx={{
                  paddingLeft: '8px',
                  width: '100%',
                  height: '32px',
                  color: colors.grey[400],
                  fontSize: '16px',
                  bgcolor: colors.grey[900],
                  borderRadius: 1,
                  marginTop: 1,
               }}
            />
         </Stack>
      </Stack>
   );
}

export default Overview;
