import React, { useState } from 'react';
import logo from 'assets/svg/logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { Paper, ThemeProvider, createTheme} from '@mui/material';

const App = () =>{
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const theme = React.useMemo(
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
    <ThemeProvider theme={theme}>     
          <Paper>
            <NavbarComponent onChangeDarkMode={handleIsDarkModeChange} />
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                React APP
              </p>
            </header>
          </Paper>
    </ThemeProvider>
  );
}

export default App;
