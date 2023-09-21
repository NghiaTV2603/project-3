import { Stack } from '@mui/material';
import TagNameServer from './TagNameServer';
import SourceListChannel from './SourceListChannel';
import OptionUser from './OptionUser';

function ColumnChannel() {
   return (
      <Stack direction="column" height="100vh">
         <TagNameServer />
         <Stack flexGrow={1}>
            <SourceListChannel />
         </Stack>
         <OptionUser />
      </Stack>
   );
}

export default ColumnChannel;
