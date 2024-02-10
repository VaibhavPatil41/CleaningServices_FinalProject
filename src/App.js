import logo from './logo.svg';
import './App.css';

import Login from './Component/Login';

import RegiStration from './Component/Register';
import Order from './Component/Order';
import OrderStatus from './Component/OrderStatus';

function App() {
  return (
    <div className="App">
      {/* <RegiStration/> 
      <Order/>*/}
      <OrderStatus/>
    </div>
    
    
  );
}

export default App;
