import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from 'styled-components';

import theme from './utils/theme';
import GlobalStyles from './utils/global';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Loader from './components/UI/Loader/Loader';

import styled from 'styled-components';

const root = document.getElementById('root');

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
      <GlobalStyles></GlobalStyles>
    </>
  </ThemeProvider>
  , root)

store.firebaseAuthIsReady
  .then((_) => {
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <>
              <App />
              <GlobalStyles></GlobalStyles>
            </>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>,
      root
    );
  })

serviceWorker.unregister();
