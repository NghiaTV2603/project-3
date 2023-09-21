import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import routes from './app/routes';
import { ColorModeContext } from './app/theme';
import { useMode } from './hooks/useMode';

function App() {
   const routing = useRoutes(routes);
   const [theme, colorMode] = useMode();
   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            {routing}
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}

export default App;
