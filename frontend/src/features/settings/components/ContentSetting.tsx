import { Stack, Box } from '@mui/material';
import Profiles from './Profiles';
import { User, Server } from '../../../app/interface';
import MyAccount from './MyAccount';

interface ContentSettingProps {
   index: number;
}
function ContentSetting({ index }: ContentSettingProps) {
   const user: User = {
      id: 1,
      username: 'Titi',
      email: 'henry@gmail.com',
      first_name: 'Henry',
      last_name: 'Thierry',
      avatar:
         'https://i0.wp.com/www.sportsbignews.com/wp-content/uploads/2021/06/henry-hd-best-pl.jpg?fit=640%2C460&ssl=1',
   };
   const servers: Server[] = [1, 2, 3, 4, 5].map((id) => ({
      id,
      name: `Server ${id}`,
      avatar:
         Math.random() < 0.5
            ? 'https://material-ui.com/static/images/avatar/1.jpg'
            : '',
   }));
   return (
      <Stack>
         <Box height="100%" py={3} px={5}>
            {index === 1 ? (
               <Profiles user={user} servers={servers} />
            ) : (
               <MyAccount user={user} />
            )}
         </Box>
      </Stack>
   );
}

export default ContentSetting;
