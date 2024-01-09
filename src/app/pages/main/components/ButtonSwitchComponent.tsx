import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ThemeSelectedMaterialUIComponent from './ThemeSelectedMaterialUIComponent';

const ButtonSwitchThemeComponent = ({changeTheme,iconDarkTheme}:any) => {  
    return (
      <>
        <div className="App">
          <FormGroup>
            <FormControlLabel
              control={<ThemeSelectedMaterialUIComponent sx={{ m: 1 }} onChange={(event: object)=>changeTheme(event)} checked={iconDarkTheme}/>}
              label="Dark mode"
            />
          </FormGroup>
        </div>
      </>
    )
  }
  
  export default ButtonSwitchThemeComponent
  