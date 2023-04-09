import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import { TransactionsProvider } from './context/TransactionContext';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
import "./index.css";

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <TransactionsProvider>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </TransactionsProvider>
);