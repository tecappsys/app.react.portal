import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import SwithThemeComponent from './SwithThemeComponent';

const ButtonSwitchThemeComponent = ({changeTheme,iconDarkTheme}:any) => {  
    return (
      <FormGroup>
        <FormControlLabel
          control={<SwithThemeComponent sx={{ m: 1 }} onChange={(event: object)=>changeTheme(event)} checked={iconDarkTheme}/>}
          label="Dark mode"
        />
      </FormGroup>
    )
  }
  
  export default ButtonSwitchThemeComponent
  