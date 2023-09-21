import { Stack } from '@mui/material';
import OverviewSetting from './OverviewSetting';
import RoleSetting from './RoleSetting';
import MemberSetting from './MemberSetting';

interface ContentSettingServerProps {
   index: number;
}

function ContentSettingServer({ index }: ContentSettingServerProps) {
   return (
      <Stack pt={6} pl={2}>
         {/* eslint-disable-next-line consistent-return */}
         {(() => {
            switch (index) {
               case 0:
                  return <OverviewSetting />;
               case 1:
                  return <RoleSetting />;
               case 2:
                  return <MemberSetting />;
               default:
                  break;
            }
         })()}
      </Stack>
   );
}

export default ContentSettingServer;
