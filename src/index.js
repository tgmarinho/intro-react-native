import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReatotronConfig';

import Routes from './routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Routes />
  </>
);

export default App;
