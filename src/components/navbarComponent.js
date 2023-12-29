import '../sass/styles.scss';
import '../App.scss';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonSwitchComponent from './buttonSwitchComponent';
import { SvgIcon } from '@mui/material';
import { ReactComponent as StarIcon } from '../assets/icons/tecappsys-logo.svg';



function NavBarComponent() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='transparent'>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <SvgIcon fontSize={'large'} inheritViewBox={true} component={StarIcon} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tecappsys
            </Typography>
            <ButtonSwitchComponent></ButtonSwitchComponent>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default NavBarComponent;
