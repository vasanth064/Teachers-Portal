import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import AuthenticationProvider from './Context/AuthContext.js';
import FirestoreProvider from './Context/FirestoreContext.js';

ReactDOM.render(
  <BrowserRouter>
    <AuthenticationProvider>
      <FirestoreProvider>
        <App />
      </FirestoreProvider>
    </AuthenticationProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register(`${process.env.PUBLIC_URL}/service-worker.js`)
//     .catch((err) => console.log('Error 💥', err));
// }
