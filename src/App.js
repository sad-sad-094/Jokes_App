/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { useState } from 'react';
import { Typography, ThemeProvider, InputLabel, Input, FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import TextField from '@mui/material/TextField';

import './styles/Main.scss';
import { theme } from './styles/Breakpoints';
import { Responsive } from './styles/MediaQuery';


function App() {

  const [hidden, setHidden] = useState('hide');

  return (

    <ThemeProvider theme={theme}>
      <Responsive>

        <Box sx={{ '& button': { m: 1 } }}>

          <Button size="medium" variant="contained" onClick={() => { setHidden('show') }}>Chuck Norris</Button>
          <Button size="medium" variant="contained">Dad Joke</Button>

        </Box>

        <div className={hidden}>
          <Box sx={{ '& button': { m: 1 } }} component="form" noValidate autoComplete="on">

            <InputLabel htmlFor="my-input">Search a joke</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" autoComplete="true" required type="text" />
            <FormHelperText id="my-helper-text">Please enter a keyword</FormHelperText>
            {/* <TextField id="outlined-basic" label="Search a joke" variant="outlined" size="normal"
            margin="dense" helperText="Please enter a keyword" /> */}
            <Button size="medium" variant="contained">Search</Button>

          </Box>
        </div>

        <div className={hidden}>
          <FormControl>

            <FormLabel>Categories</FormLabel>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >

              <FormControlLabel labelPlacement="top" value="animal" control={<Radio />} label="Animal" />
              <FormControlLabel labelPlacement="top" value="career" control={<Radio />} label="Career" />
              <FormControlLabel labelPlacement="top" value="Celebrity" control={<Radio />} label="Celebrity" />
              <FormControlLabel labelPlacement="top" value="dev" control={<Radio />} label="Dev" />
              <FormControlLabel labelPlacement="top" value="explicit" control={<Radio />} label="Explicit" />
              <FormControlLabel labelPlacement="top" value="fashion" control={<Radio />} label="Fashion" />
              <FormControlLabel labelPlacement="top" value="food" control={<Radio />} label="Food" />
              <FormControlLabel labelPlacement="top" value="fistory" control={<Radio />} label="History" />
              <FormControlLabel labelPlacement="top" value="money" control={<Radio />} label="Money" />
              <FormControlLabel labelPlacement="top" value="movie" control={<Radio />} label="Movie" />
              <FormControlLabel labelPlacement="top" value="music" control={<Radio />} label="Music" />
              <FormControlLabel labelPlacement="top" value="political" control={<Radio />} label="Political" />
              <FormControlLabel labelPlacement="top" value="religion" control={<Radio />} label="Religion" />
              <FormControlLabel labelPlacement="top" value="science" control={<Radio />} label="Science" />
              <FormControlLabel labelPlacement="top" value="sport" control={<Radio />} label="Sport" />
              <FormControlLabel labelPlacement="top" value="travel" control={<Radio />} label="Travel" />

            </RadioGroup>

          </FormControl>
        </div>

        <div className="cards_container">
          <div className="card">
            <div className="card_header">
              <h3>Source</h3>
            </div>
            <div className="card_body">
              <p>Joke</p>
            </div>
          </div>

          <div className="card">
            <div className="card_header">
              <h3>Source</h3>
            </div>
            <div className="card_body">
              <p>Joke</p>
            </div>
          </div>

          <div className="card">
            <div className="card_header">
              <h3>Source</h3>
            </div>
            <div className="card_body">
              <p>Joke</p>
            </div>
          </div>

          <div className="card">
            <div className="card_header">
              <h3>Source</h3>
            </div>
            <div className="card_body">
              <p>Joke</p>
            </div>
          </div>
          <Typography variant='h1'>
            Hello, world!
          </Typography>
        </div>
      </Responsive>
    </ThemeProvider>

  );

}

export default App;
