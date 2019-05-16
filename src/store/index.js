import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import firebase from '../Firebase/Firebase'

import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import { reduxFirestore, getFirestore } from 'redux-firestore';

const rrfConfig = {
  userProfile: 'Users',
  useFirestoreForProfile: true
}

let composeEnhancers =
  process.env.NODE_ENV === 'development'
    ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    :
    compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, rrfConfig),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

export default store;