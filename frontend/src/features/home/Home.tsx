import { Stack, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { tokens, ColorPalette } from '../../app/theme';
import ColumnServer from './components/ColumnServer';
import ColumnChannel from './components/ColumnChannel';
import AppBarStyle from './components/AppBar';
import ContentHome from './components/ContentHome';
import { useAppSelector } from '../../hooks/useRedux';

function Home(): JSX.Element {
   const theme = useTheme();
   const colors: ColorPalette = tokens(theme.palette.mode);
   const navigate = useNavigate();
   const { isLogin } = useAppSelector((state) => state.auth);
   useEffect(() => {
      if (!isLogin) {
         navigate('/auth/login');
      }
   }, [isLogin]);
   return (
      <Stack height="100vh" flexDirection="row">
         <Stack width={70} bgcolor={colors.grey[850]}>
            <ColumnServer />
         </Stack>
         <Stack width={250} bgcolor={colors.grey[800]}>
            <ColumnChannel />
         </Stack>
         <Stack flexGrow={1} direction="column" bgcolor={colors.grey[750]}>
            <AppBarStyle />
            <ContentHome />
         </Stack>
      </Stack>
   );
}

export default Home;
