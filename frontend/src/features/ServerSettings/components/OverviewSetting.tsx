import { Stack, Typography, colors, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useAppSelector } from '../../../hooks/useRedux';

function OverviewSetting() {
   const { currentServer } = useAppSelector((state) => state.server);
   const handleCopy = () => {};
   return (
      <Stack>
         <Typography variant="h5" component="h2">
            Overview
         </Typography>
         <Stack mt={2} direction="row" alignItems="center" spacing={1}>
            <Typography variant="h6">Code :</Typography>
            <Stack bgcolor={colors.grey[800]} px={1} py={0.5} borderRadius={3}>
               <Typography>{currentServer?.code || ''}</Typography>
            </Stack>
            <IconButton size="small" onClick={handleCopy}>
               <ContentCopyIcon />
            </IconButton>
         </Stack>
      </Stack>
   );
}

export default OverviewSetting;
