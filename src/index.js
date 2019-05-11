import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from 'styled-components';

import theme from './utils/theme';
import GlobalStyles from './utils/global';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <App />
        <GlobalStyles></GlobalStyles>
      </>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
