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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

import './styles/Main.scss';
import { theme } from './styles/Breakpoints';
import { Responsive } from './styles/MediaQuery';
import Modal from './components/Modal';
import Cards from './components/Cards';
import { dad_API_Header, dad_API_URL } from './utils/DadJokesAPI';
import { byCategoryRequest, categoriesRequest, chuck_API_URL, freeRequest, randomRequest } from './utils/ChuckNorrisAPI';
import Footer from './components/Footer';


function App() {

  const [hiddenOption, setHiddenOption] = useState('hide');
  const [hiddenFreeSearch, setHiddenFreeSearch] = useState('hide');
  const [hiddenSeeCategories, setHiddenSeeCategories] = useState('hide');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const [keyword, setKeyword] = useState({ keyword: '' });
  const [categoryRequest, setCategoryRequest] = useState('');
  const [jokesList, setJokesList] = useState([]);
  const [chuckCats, setChuckCats] = useState([]);

  const chuck = 'Chuck Norris';
  const dad = 'Dad Joke';

  const writeJokes = (joke, source) => {
    setJokesList([
      ...jokesList,
      { joke, source },
    ])
  }

  const getDadJoke = () => {

    const options = {
      method: 'GET',
      url: dad_API_URL,
      headers: dad_API_Header
    };

    axios.request(options)
      .then((response) => {
        writeJokes(response.data.joke, dad);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  const getRandomChuck = () => {

    axios.get(chuck_API_URL + randomRequest)
      .then((response) => {
        writeJokes(response.data.value, chuck);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  const getCategoriesChuck = () => {

    // setOpen(true);
    axios.get(chuck_API_URL + categoriesRequest)
      .then((response) => {
        setChuckCats(response.data);
        setOpen(false);
      })
      .catch((error) => {
        console.error(error);
        setOpen(false);
      });

  }

  const getCategoryRequest = (event) => {
    event.preventDefault();
    setCategoryRequest(event.target.value)
  }

  const getByCategory = () => {

    axios.get(`${chuck_API_URL}${byCategoryRequest}${categoryRequest}`)
      .then((response) => {
        writeJokes(response.data.value, chuck);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const getKeyword = (event) => {
    event.preventDefault();
    setKeyword({
      ...keyword,
      [event.target.name]: event.target.value,
    })
  }

  const getFreeChuck = () => {

    axios.get(`${chuck_API_URL}${freeRequest}${keyword.keyword}`)
      .then((response) => {
        let list = response.data.result;
        let selected = Math.floor(Math.random() * list.length);
        writeJokes(list[selected].value, chuck);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  return (

    <ThemeProvider theme={theme}>

      <Responsive style={{marginBottom: '3rem'}}>

        <div className="search_container">

          <Modal />

          <Typography variant="h6">Please select a Chuck Norris or Dad joke.</Typography>

          <Box sx={{ '& button': { m: 1 } }}>

            <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} className="buttons" onClick={() => { setHiddenOption('show') }}>Chuck Norris</Button>
            <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => { getDadJoke() }}>Dad Joke</Button>

          </Box>

          <div className={hiddenOption}>

            <Box sx={{ '& button': { m: 1 } }} className="buttons_container" >

              <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => {
                setHiddenOption('hide')
                getRandomChuck()
              }}>Random Search</Button>

              <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => {
                setHiddenOption('hide')
                setHiddenSeeCategories('show')
                getCategoriesChuck()
                handleToggle()
              }}>See Categories</Button>

              {/* <Spinner /> */}
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
                transitionDuration={{ appear: 2000, enter: 1000, exit: 500 }}>
                <CircularProgress color="inherit" />
              </Backdrop>

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

                <Input
                  sx={{ width: '25rem' }}
                  name="keyword" id="my-input"
                  aria-describedby="my-helper-text"
                  autoComplete="true"
                  required
                  type="text"
                  label="keyword"
                  onChange={getKeyword} />

                <FormHelperText id="my-helper-text">Please enter a keyword</FormHelperText>

                <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => {
                  setHiddenFreeSearch('hide')
                  getFreeChuck()
                }}>Search</Button>
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
                  name="row-radio-buttons-group">

                  {chuckCats.map((category, index, chuckCats) => {
                    return (
                      <FormControlLabel sx={{ margin: '.5rem' }} labelPlacement="top" name={category} value={category} label={category} control={<Radio />} onChange={getCategoryRequest} />
                    )
                  })
                  }

                </RadioGroup>


                <Button size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => {
                  setHiddenSeeCategories('hide')
                  getByCategory()
                }}>Search</Button>
              </div>

            </FormControl>
          </div>

        </div>

        <Cards list={jokesList} />

      </Responsive>

      <Footer />

    </ThemeProvider>



  );

}

export default App;
