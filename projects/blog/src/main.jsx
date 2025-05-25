import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import config from './config.json';
import { Provider } from 'react-redux';
import { store } from './store/toolkit/toolkit';
import './index.css';
import App from './App.jsx';

// Tasks with built in useReducer
if (config.enableReduxToolkit) {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
