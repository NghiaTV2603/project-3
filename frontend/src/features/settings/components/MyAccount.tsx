import { Box, Button, Stack, Divider, Card, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { User } from '../../../app/interface';
import { ColorPalette, tokens } from '../../../app/theme';
import { useAppSelector } from '../../../hooks/useRedux';

function MyAccount() {
   const theme = useTheme();
   const { user } = useAppSelector((state) => state.auth);
   const colors: ColorPalette = tokens(theme.palette.mode);
   return (
      <Stack>
         <Stack width="100%" py={2} color={colors.grey[100]}>
            <Typography fontWeight={600} fontSize={18}>
               My Account
            </Typography>
         </Stack>
         <Card
            sx={{
               borderRadius: 2,
               backgroundColor: colors.grey[850],
            }}
         >
            <Stack
               direction="row"
               justifyContent="space-between"
               color={colors.grey[200]}
               fontSize="1.5rem"
               px={4}
               pt={4}
               alignItems="center"
            >
               <Stack direction="row" alignItems="center">
                  <Avatar
                     sx={{
                        width: 80,
                        height: 80,
                        marginRight: 2,
                     }}
                     alt="Remy Sharp"
                     src={user?.image}
                  />
                  {user?.username}
               </Stack>
            </Stack>
            <Box p={2}>
               <Stack justifyContent="space-between" direction="row" mb={1}>
                  <Stack>
                     <Typography
                        fontSize={13}
                        variant="inherit"
                        color={colors.grey[400]}
                     >
                        Username:{' '}
                     </Typography>
                     <Typography variant="inherit" pl={1}>
                        {user?.username}
                     </Typography>
                  </Stack>
                  <Box>
                     <Button>Edit</Button>
                  </Box>
               </Stack>
               <Stack justifyContent="space-between" direction="row" mb={1}>
                  <Stack>
                     <Typography
                        fontSize={13}
                        variant="inherit"
                        color={colors.grey[400]}
                     >
                        Full Name:{' '}
                     </Typography>
                     <Typography variant="inherit" pl={1}>
                        {user?.username}
                     </Typography>
                  </Stack>
                  <Box>
                     <Button>Edit</Button>
                  </Box>
               </Stack>
               <Stack justifyContent="space-between" direction="row">
                  <Stack>
                     <Typography
                        fontSize={13}
                        variant="inherit"
                        color={colors.grey[400]}
                     >
                        Email:{' '}
                     </Typography>
                     <Typography variant="inherit" pl={1}>
                        {user?.email}
                     </Typography>
                  </Stack>
                  <Box>
                     <Button>Edit</Button>
                  </Box>
               </Stack>
            </Box>
         </Card>
         <Box py={2}>
            <Divider color={colors.grey[500]} />
         </Box>
         <Box color={colors.grey[100]}>
            <Typography py={1} variant="h5">
               Password and Authentication
            </Typography>
            <Button variant="contained">Change Password</Button>
         </Box>
      </Stack>
   );
}

export default MyAccount;
