import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { theme } from './styles/theme.jsx';
import { ThemeProvider } from 'styled-components';
import { Suspense } from 'react';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
    <BrowserRouter basename='/MyVocabulary'>
      <Suspense fallback={null}> 
    <App />
    </Suspense>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
