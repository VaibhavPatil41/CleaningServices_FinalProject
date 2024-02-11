import './App.css';
import RegiStration from './Component/Register';
import Order from './Component/Order';
import OrderStatus from './Component/OrderStatus';
import Services from './Component/Services';
import CustWelcome from './WebPages/CustHome';
import Home from './WebPages/Home';
import { ErrorBoundary } from "react-error-boundary";
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
    {/* <RegiStration/> 
      <Order/>
      <OrderStatus/>
      <Services/>
      <CustWelcome/>
      <ErrorBoundary fallback={() => {return (<div>Something went wrong</div>)}}>
  <Home/>
</ErrorBoundary>  */}
   
                 {/* <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/Register" element={ <RegiStration/>} />
            <Route path="/Contact" element={ <c/> } />
            <Route path="/Login" element={<Login/> }  />
         
         <ErrorBoundary fallbackRender={()=>{
                return (
                  <h1>Something went wrong</h1> 
                )
              }}>
              </ErrorBoundary>
              </Routes> */}
    </div>
  )
}

export default App;
