import { useTheme } from '@mui/material';
import { tokens } from '../app/theme';

const useColors = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const theme = useTheme();
   return tokens(theme.palette.mode);
};

export default useColors;
