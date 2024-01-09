import React, { useState } from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { SvgIcon } from '@mui/material';
import { ReactComponent as TecappsysIcon } from 'assets/svg/logo.svg';
import ButtonSwitchThemeComponent from './ButtonSwitchComponent';
import { LOCAL_STORAGE_KEY } from 'app/shared/enums/local-storage-key.enum';
import { THEME_UI } from 'app/shared/enums/theme-ui.enum';

const NavbarComponent = ({onChangeDarkMode}:any) => {
  
  const [iconDarkTheme, setIconDarkTheme] = useState<boolean>(false);

  // useEffect(() => {
  //   const localStorageThemeUi = localStorage.getItem(LOCAL_STORAGE_KEY.THEME_UI)
  //   if(localStorageThemeUi){
  //     isDarkTheme = localStorageThemeUi === THEME_UI.DARK;
  //   }else{
  //     localStorage.setItem(LOCAL_STORAGE_KEY.THEME_UI,THEME_UI.LIGHT)
  //   }   
  // }, [isDarkMode])

  const handleChangeTheme = (event:any) => {
    const isDarkMode = event.target.checked
    onChangeDarkMode(isDarkMode)
    localStorage.setItem(LOCAL_STORAGE_KEY.THEME_UI,isDarkMode ? THEME_UI.DARK : THEME_UI.LIGHT)
    setIconDarkTheme(isDarkMode)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar style={{display:'flex',justifyContent:'space-between',minHeight:'65px'}}>
            <div style={{display:'flex',alignItems:"center",gap:"8px"}}>
              <SvgIcon style={{height:'48px',width:'auto'}} inheritViewBox={true} component={TecappsysIcon} />
              <span style={{fontSize:'16px',fontWeight:"400"}}>TECAPPSYS</span>
            </div>
            
            <ButtonSwitchThemeComponent 
              changeTheme={handleChangeTheme}
              iconDarkTheme={iconDarkTheme}
                  />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default NavbarComponent
