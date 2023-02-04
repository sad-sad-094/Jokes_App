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
import { cyan } from '@mui/material/colors';
// import TextField from '@mui/material/TextField';

import './styles/Main.scss';
import { theme } from './styles/Breakpoints';
import { Responsive } from './styles/MediaQuery';
import Modal from './components/Modal';
import Cards from './components/Cards';


function App() {

  const [hiddenOption, setHiddenOption] = useState('hide');
  const [hiddenFreeSearch, setHiddenFreeSearch] = useState('hide');
  const [hiddenSeeCategories, setHiddenSeeCategories] = useState('hide');

  return (

    <ThemeProvider theme={theme}>
      <Responsive>

        <div className="search_container">

          <Modal />

          <Typography variant="h6">Please select a Chuck Norris or Dad joke.</Typography>

          <Box sx={{ '& button': { m: 1 } }}>

            <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} className="buttons" onClick={() => { setHiddenOption('show') }}>Chuck Norris</Button>
            <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }}>Dad Joke</Button>

          </Box>

          <div className={hiddenOption}>
            <Box sx={{ '& button': { m: 1 } }} className="buttons_container" >
              <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => { setHiddenOption('hide') }}>Random Search</Button>
              <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => {
                setHiddenOption('hide')
                setHiddenSeeCategories('show')
              }}>See Categories</Button>
              <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => {
                setHiddenOption('hide')
                setHiddenFreeSearch('show')
              }}>Free Search</Button>
            </Box>
          </div>

          <div className={hiddenFreeSearch}>
            <Box sx={{ '& button': { m: 1 } }} component="form" noValidate autoComplete="on">

              <div className="chuck_search">
                <InputLabel htmlFor="my-input">Search a joke</InputLabel>
                <Input sx={{ width: '25rem' }} id="my-input" aria-describedby="my-helper-text" autoComplete="true" required type="text" />
                <FormHelperText id="my-helper-text">Please enter a keyword</FormHelperText>
                {/* <TextField id="outlined-basic" label="Search a joke" variant="outlined" size="normal"
            margin="dense" helperText="Please enter a keyword" /> */}
                <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => { setHiddenFreeSearch('hide') }}>Search</Button>
              </div>

            </Box>
          </div>

          <div className={hiddenSeeCategories}>
            <FormControl>

              <div className="categories_container">
                <FormLabel>Categories</FormLabel>

                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >

                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="animal" control={<Radio />} label="Animal" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="career" control={<Radio />} label="Career" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="Celebrity" control={<Radio />} label="Celebrity" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="dev" control={<Radio />} label="Dev" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="explicit" control={<Radio />} label="Explicit" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="fashion" control={<Radio />} label="Fashion" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="food" control={<Radio />} label="Food" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="fistory" control={<Radio />} label="History" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="money" control={<Radio />} label="Money" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="movie" control={<Radio />} label="Movie" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="music" control={<Radio />} label="Music" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="political" control={<Radio />} label="Political" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="religion" control={<Radio />} label="Religion" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="science" control={<Radio />} label="Science" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="sport" control={<Radio />} label="Sport" />
                  <FormControlLabel sx={{margin: '.5rem'}} labelPlacement="top" value="travel" control={<Radio />} label="Travel" />

                </RadioGroup>

                <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => { setHiddenSeeCategories('hide') }}>Search</Button>
              </div>

            </FormControl>
          </div>

        </div>

        <Cards />

      </Responsive>
    </ThemeProvider>

  );

}

export default App;
