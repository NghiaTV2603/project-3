import { useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from '../app/theme';

type ThemeType = ReturnType<typeof createTheme>;
type ColorModeType = {
   toggleColorMode: () => void;
};
// eslint-disable-next-line import/prefer-default-export
export const useMode = (): [ThemeType, ColorModeType] => {
   const [mode, setMode] = useState('dark');

   const colorMode = useMemo(
      () => ({
         toggleColorMode: () =>
            setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
      }),
      []
   );

   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
   return [theme, colorMode];
};
