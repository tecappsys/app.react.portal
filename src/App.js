import * as React from 'react';
import NavBarComponent from './components/navbarComponent';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardComponent from './components/cardComponent';

function App() {
  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
      <Container fixed style={{marginTop:32+'px'}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CardComponent></CardComponent>
            </Grid>
            <Grid item xs={4}>
              <CardComponent></CardComponent>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
