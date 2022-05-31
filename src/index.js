import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import AuthenticationProvider from './Context/AuthContext.js';
import FirestoreProvider from './Context/FirestoreContext.js';
import UiProvider from './Context/UiContext.js';

ReactDOM.render(
  <BrowserRouter>
    <AuthenticationProvider>
      <FirestoreProvider>
        <UiProvider>
          <App />
        </UiProvider>
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
