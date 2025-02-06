import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import the App component
import NotFoundPage from './pages/NotFoundPage.jsx';
import { ErrorBoundary } from "react-error-boundary" 

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={NotFoundPage}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>
);
