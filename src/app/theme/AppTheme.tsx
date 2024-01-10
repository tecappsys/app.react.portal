import { ThemeProvider } from '@emotion/react';
import { Box, Paper, createTheme } from '@mui/material';
import { useMemo, useState } from 'react';
import NavbarComponent from './components/NavbarComponent';

export const AppTheme = ({ children }:any) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          ...(isDarkMode 
            ? { 
                background:{
                  paper:'#212121'
                },
              }
            : {
                primary: {
                  main: '#f5f5f5',
                }
              }
          ),
        },
      }),
    [isDarkMode],
  );
  const handleIsDarkModeChange = (state:boolean) => {
    setIsDarkMode(state);
  };
  return (
    <ThemeProvider theme={ theme }>
      <NavbarComponent onChangeDarkMode={handleIsDarkModeChange} />  
      <Paper sx={{ flexGrow: 1, p: 3, height: 'calc(100vh - 113px)' }}>
        { children }
      </Paper>   
    </ThemeProvider>
  )
}
