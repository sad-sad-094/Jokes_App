/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { Typography, ThemeProvider } from '@mui/material';

import './styles/Main.scss';
import { theme } from './styles/Breakpoints';
import { Responsive } from './styles/MediaQuery';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Responsive>
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
