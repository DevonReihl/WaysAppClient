import 'unfetch/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { TripProvider } from './contexts/TripContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <TripProvider>
        <App />
      </TripProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
