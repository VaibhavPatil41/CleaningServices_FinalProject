import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Link } from 'react-router-dom';

import CustWelcome from './WebPages/CustHome';
import Login from './Component/Login';
import RegiStration from './Component/Register';
import AdminWelcome from './WebPages/AdminHome';
import  SPWelcome from './WebPages/SPHome';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Services from './Component/Services';
import Home from './WebPages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   
    
    
{/* <ErrorBoundary fallback={() => {return (<div>Something went wrong</div>)}}>
  <Services/>
</ErrorBoundary>

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <CustWelcome/>
</ErrorBoundary>

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <SPWelcome/>
</ErrorBoundary>

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <AdminWelcome/>
</ErrorBoundary>

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <RegiStration/>
</ErrorBoundary>

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <Login/>
</ErrorBoundary>  */}

</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
