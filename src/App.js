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

  const [keyword, setKeyword] = useState({ keyword: '' });
  const [categoryRequest, setCategoryRequest] = useState('');
  const [jokesList, setJokesList] = useState([]);
  const [chuckCats, setChuckCats] = useState([]);

  const chuck = 'Chuck Norris';
  const dad = 'Dad Joke';

  const requestFailure = (error) => {
    console.alert(error);
    alert('Request failed, please refresh your browser and try again.');
  }

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
        requestFailure(error);
      });

  }

  const getRandomChuck = () => {

    axios.get(chuck_API_URL + randomRequest)
      .then((response) => {
        writeJokes(response.data.value, chuck);
      })
      .catch((error) => {
        requestFailure(error);
      });

  }

  const getCategoriesChuck = () => {

    axios.get(chuck_API_URL + categoriesRequest)
      .then((response) => {
        setChuckCats(response.data);
      })
      .catch((error) => {
        requestFailure(error);
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
        requestFailure(error);
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
        requestFailure(error);
      });

  }

  return (

    <ThemeProvider theme={theme}>

      <Responsive style={{ marginBottom: '3rem' }}>

        <div id="searchMethods" className="search_container">

          <Modal />

          <Typography id="headerTittle" variant="h6" sx={{ textAlign: 'center' }}>Please select a Chuck Norris or Dad joke.</Typography>

          <Box sx={{ '& button': { m: 1 } }}>

            <Button id="chuckRequest" size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} className="buttons" onClick={() => { setHiddenOption('show') }}>Chuck Norris</Button>
            <Button id="dadRequest" size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => { getDadJoke() }}>Dad Joke</Button>

          </Box>

          <div id="chuckMethods" className={hiddenOption}>

            <Box sx={{ '& button': { m: 1 } }} className="buttons_container" >

              <Button id="random" size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => {
                setHiddenOption('hide')
                getRandomChuck()
              }}>Random Search</Button>

              <Button id="seeCategories" size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => {
                setHiddenOption('hide')
                setHiddenSeeCategories('show')
                getCategoriesChuck()
              }}>See Categories</Button>

              <Button id="keywordSearch" size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => {
                setHiddenOption('hide')
                setHiddenFreeSearch('show')
              }}>Free Search</Button>

            </Box>

          </div>

          <div className={hiddenFreeSearch}>
            <Box sx={{ '& button': { m: 1 } }} component="form" noValidate autoComplete="on">

              <div id="keywordSearch" className="chuck_search">
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

                <FormHelperText id="searchHelper">Please enter a keyword</FormHelperText>

                <Button id="keywordSearchButton" size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => {
                  setHiddenFreeSearch('hide')
                  getFreeChuck()
                }}>Search</Button>
              </div>

            </Box>
          </div>

          <div className={hiddenSeeCategories}>
            <FormControl>

              <div id="categoriesSearch" className="categories_container">
                <FormLabel>Categories</FormLabel>

                <RadioGroup
                  id="categories"
                  row
                  aria-labelledby="categoriesRadioButtons-label"
                  name="categoriesRadioButtons">

                  {chuckCats.map((category, index, chuckCats) => {
                    return (
                      <FormControlLabel id={`${category}Option`} sx={{ margin: '.5rem' }} labelPlacement="top" name={category} value={category} label={category} control={<Radio />} onChange={getCategoryRequest} />
                    )
                  })
                  }

                </RadioGroup>


                <Button id="categorySearchButton" size="medium" variant="contained" sx={{ backgroundColor: cyan[600] }} onClick={() => {
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
