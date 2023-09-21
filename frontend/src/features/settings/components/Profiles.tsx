import { useState } from 'react';
import {
   Typography,
   Stack,
   Divider,
   Button,
   Avatar,
   useTheme,
   TextField,
} from '@mui/material';
import { User, Server } from '../../../app/interface';
import { ColorPalette, tokens } from '../../../app/theme';

interface ProfilesProps {
   user: User;
   servers: Server[];
}

/**
 *
 * @param user
 * @param servers
 * @constructor
 */
function Profiles({ user, servers }: ProfilesProps) {
   const theme = useTheme();
   const colors: ColorPalette = tokens(theme.palette.mode);
   const [avatar, setAvatar] = useState<unknown>(user.avatar);
   console.log(avatar);
   return (
      <Stack color={colors.grey[400]}>
         <Stack width="100%" py={2} color={colors.grey[100]}>
            <Typography fontWeight={600} fontSize={20}>
               Profiles
            </Typography>
         </Stack>
         <Typography
            color={colors.grey[200]}
            fontSize={15}
            fontWeight={600}
            mb={1}
         >
            User Profile
         </Typography>
         <Divider color={colors.grey[700]} />

         <Stack direction="row" alignItems="center">
            <Stack
               p={1}
               pt={2}
               pb={3}
               width={300}
               direction="column"
               spacing={1}
            >
               <TextField
                  label={
                     <Typography fontSize={13} fontWeight={600}>
                        Display Name
                     </Typography>
                  }
                  variant="filled"
               />
               <Stack
                  direction="column"
                  spacing={1}
                  color={colors.grey[200]}
                  pt={1}
               >
                  <Typography fontSize={13} fontWeight={600}>
                     Avatar
                  </Typography>
                  <Stack direction="row" spacing={1}>
                     <Button
                        sx={{ marginRight: 2 }}
                        variant="contained"
                        component="label"
                     >
                        Change Avatar
                        <input hidden accept="image/*" multiple type="file" />
                     </Button>
                     <Button
                        onClick={() => setAvatar('')}
                        sx={{ color: colors.grey[200] }}
                     >
                        Remove Avatar
                     </Button>
                  </Stack>
               </Stack>
            </Stack>
            <Stack pl={3} spacing={1}>
               <Typography
                  fontSize={16}
                  fontWeight={600}
                  color={colors.grey[200]}
               >
                  Preview
               </Typography>
               <Stack p={1}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                     <Avatar
                        sx={{
                           width: 80,
                           height: 80,
                        }}
                        alt="Remy Sharp"
                     />
                     <Typography
                        sx={{ color: colors.grey[200], fontSize: '1.5rem' }}
                     >
                        {user.first_name} {user.last_name}
                     </Typography>
                  </Stack>
               </Stack>
            </Stack>
         </Stack>

         <Typography
            color={colors.grey[200]}
            fontSize={15}
            fontWeight={600}
            mb={1}
         >
            Server Profiles
         </Typography>
         <Divider color={colors.grey[750]} />
         <Stack py={2}>
            {servers.map((server) => (
               <Stack
                  key={server.id}
                  m={0.5}
                  height={60}
                  bgcolor={colors.grey[900]}
                  width={500}
                  alignItems="center"
                  direction="row"
                  borderRadius={2}
               >
                  <Avatar
                     sx={{
                        width: 45,
                        height: 45,
                        marginLeft: 2,
                     }}
                     src={server.avatar}
                  />
                  <Typography px={2}>{server.name}</Typography>
               </Stack>
            ))}
         </Stack>
      </Stack>
   );
}

export default Profiles;
