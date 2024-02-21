import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login';
import Order from './Component/Order';
import OrderStatus from './Component/OrderStatus';
//import Services from './Component/Services';
import Feedback from './Component/Feedback';
import { Logout } from './Component/Logout';
import { useSelector } from "react-redux"
import EditProfile from './WebPages/EditProfile';
import Welcome from './WebPages/WelcomePage';
import SPWelcome from './SPComponents/SPHome';
import Home from './WebPages/Home';
import CustWelcome from './CustomerComponents/CustHome';
import AdminWelcome from './AdminComponents/AdminHome';
import RegiStrationS from './SPComponents/ServiceProviderRegister';
import ApproveReq from './AdminComponents/approveRequest';
import AddLabour from './SPComponents/AddLabour';
import AddService from './SPComponents/AddServiceVaibhav';/////////////
import UsingEffectComp from './Component/UsingEffectComp';
import LandingPage from './landingPages/LandingPage';
import Header from './landingPages/Header';
import UserLoginSMT from './landingPages/UserLogin';
import Footer from './landingPages/Footer';
import AboutUs from './landingPages/AboutUs';
import ContactUs from './landingPages/ContactUs';
import RegiStration1 from './CustomerComponents/CustomerRegister';
import AdminDash from './AdminComponents/AdminDashboard';
import CustomerDash from './CustomerComponents/CustomerDashboard';
import SPDash from './SPComponents/SPDashboard';
import ViewLabour from './SPComponents/ViewLabour';
import EditLabour from './SPComponents/EditLabour';
import EditProfileCust from './CustomerComponents/EditProfileCust';
import EditSP from './SPComponents/EditSP';
import ConfirmBooking from './CustomerComponents/ConfirmBookingVaibhav';
import ViewServicesSP from './SPComponents/viewServicesVarad';
import CustDiplayService from './CustomerComponents/CustomerService';
import SpOrders from './SPComponents/SpOrders';
import CustOrders from './CustomerComponents/CustOrders';



function App() {
  const mystate = useSelector(state=>state.logged)
  
 

  return (
    // <RegiStration/>
    // <Login/>
    // <Feedback/>   <div style={{display: mystate.loggedIn?"none":"block"}}>

    <div>
      
      {/* <div className='nav navbar container'>
        <ul className='nav container' style={{ backgroundColor: 'grey', color:'red' }}>

          
            <li className="nav-item"  style={{display: mystate.loggedIn ?"none":"block"}} >
                <Link to="/reg" className="nav-link">REGISTER</Link>
            </li>
            <li className="nav-item" style={{display: mystate.loggedIn ?"none":"block"}} >
                <Link to="/login" className="nav-link">LOGIN</Link>
            </li>
            <li className="nav-item" >
                <Link to="/services" className="nav-link">Services</Link>
            </li>

            

            <li className="nav-item" style={{display: mystate.loggedIn ?"block":"none"}}>
                <Link to="/order" className="nav-link">Order</Link>
            </li>
            <li className="nav-item"  style={{display: mystate.loggedIn ?"block":"none"}}>
                <Link to="/orderStatus" className="nav-link">Orde Status</Link>
            </li>
            <li className="nav-item"  style={{display: mystate.loggedIn ?"block":"none"}}>
                <Link to="/feedback" className="nav-link">FeedBack</Link>
            </li>
            <li className="nav-item"  style={{display: mystate.loggedIn ?"block":"none"}}>
                <Link to="/logout" className="nav-link">Logout</Link>
            </li>
          
          
        </ul>
      </div> */}
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path="/login" element={<Login/>  }/> 
        {/* <Route path="/reg" element={<RegiStration/> }/>  */}
        {/* <Route path="/services" element={<Services/> }/>  */}
        <Route path="/feedback" element={<Feedback/> }/>

        <Route path="/order" element={<Order/>} />    
        <Route path="/orderStatus" element={<OrderStatus/>} />    
        <Route path="/logout" element={<Logout/>} />   

       
        {/* <Route path='/spWelcome' element={<SPWelcome/> } /> */}
        <Route path='/spWelcome' element={<SPDash/> } />
        
        {/* <Route path='/adminWelcome' element={<AdminWelcome/>} />     */}
        <Route path='/adminWelcome' element={<AdminDash/>} />     
        {/* <Route path='/custWelcome' element={<CustWelcome/>} /> */}
        <Route path='/custWelcome' element={<CustomerDash/>} />
        <Route path='/welcome' element={<Welcome/> } />
        <Route path='/editProfile' element={<EditProfile/> } />

        <Route path="/regsp" element={<RegiStrationS/>}/>
        <Route path="/regcus" element={<RegiStration1/> }/>
        <Route path="/approve" element={<ApproveReq/> }/>
        <Route path="/addlabour" element={<AddLabour/> }/>
        <Route path="/addservice" element={<AddService/>}/>


        <Route path="/effect" element={<UsingEffectComp/>}/>



        <Route path="*" element={<LandingPage/>}/>
        {/* <Route path="/" element={<LandingPage/>}/> */}
        <Route path="/header" element={<Header/>}/>
        <Route path="/ulogin" element={<UserLoginSMT/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/viewLabour" element={<ViewLabour/>}/>
        <Route path="/editLabour" element={<EditLabour/>}/>
        <Route path="/editCust" element={<EditProfileCust/>}/>
        <Route path="/editSP" element={<EditSP/>}/>



        <Route path="/viewservicessp" element={<ViewServicesSP/>}/>
        {/* <Route path="/confirmBooking" element={<ConfirmBooking/>}/> */}
        <Route path="/customerService" element={<CustDiplayService/>}/>
        
        <Route path="/custOrder" element={<CustOrders/>}/>
        <Route path="/spOrder" element={<SpOrders/>}/>
        <Route path="/confirmBook" element={<ConfirmBooking/>}/>
       

        


       
        
       
        

        {/* <Route path="/reg1" element={<RegiStration1/> }/>  */}

        {/* <Route path='/log' element={<UserLogin/> } /> */}
        
      </Routes> 
    </div>

     
    
    // <div>
    //    <AdminWelcome/>  
    //    <Home/> 
    //    <CustWelcome/> 
    //    <SPWelcome/> 
    //    <Welcome/> 
    //    <EditProfile/>  


       
    //   <div className='nav navbar container'>
    //     <ul className='nav container' style={{ backgroundColor: 'grey', color:'red' }}>

          
    //         <li className="nav-item"  style={{display: mystate.loggedIn ?"none":"block"}} >
    //             <Link to="/reg" className="nav-link">REGISTER</Link>
    //         </li>
    //         <li className="nav-item" style={{display: mystate.loggedIn ?"none":"block"}} >
    //             <Link to="/login" className="nav-link">LOGIN</Link>
    //         </li>
    //         <li className="nav-item" >
    //             <Link to="/services" className="nav-link">Services</Link>
    //         </li>

            

    //         <li className="nav-item" style={{display: mystate.loggedIn ?"block":"none"}}>
    //             <Link to="/order" className="nav-link">Order</Link>
    //         </li>
    //         <li className="nav-item"  style={{display: mystate.loggedIn ?"block":"none"}}>
    //             <Link to="/orderStatus" className="nav-link">Orde Status</Link>
    //         </li>
    //         <li className="nav-item"  style={{display: mystate.loggedIn ?"block":"none"}}>
    //             <Link to="/feedback" className="nav-link">FeedBack</Link>
    //         </li>
    //         <li className="nav-item"  style={{display: mystate.loggedIn ?"block":"none"}}>
    //             <Link to="/logout" className="nav-link">Logout</Link>
    //         </li>
          
          
    //     </ul>
    //   </div>
    //   <Routes>
    //     <Route path="/login" element={<Login/> }/> 
    //     <Route path="/reg" element={<RegiStration/> }/> 
    //     <Route path="/services" element={<Services/> }/> 
    //     <Route path="/feedback" element={<Feedback/> }/>

    //     <Route path="/order" element={<Order/>} />    
    //     <Route path="/orderStatus" element={<OrderStatus/>} />    
    //     <Route path="/logout" element={<Logout/>} />    

    //   </Routes> 
    
      
    // </div> 

    
  );
}

export default App;
