import { Stack } from '@mui/material';
import Overview from './Overview';
import Permissions from './Permissions';
// import Invites from './Invites';

interface ContentChannelSettingProps {
   index: number;
}
function ContentChannelSetting({ index }: ContentChannelSettingProps) {
   return (
      <Stack pt={6} pl={2}>
         {/* eslint-disable-next-line consistent-return */}
         {(() => {
            switch (index) {
               case 0:
                  return <Overview />;
               case 1:
                  return <Permissions />;
               // case 2:
               // return <Invites />;
               default:
                  break;
            }
         })()}
      </Stack>
   );
}

export default ContentChannelSetting;
