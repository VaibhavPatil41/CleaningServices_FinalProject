import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"


// import Header from "./Header";
// import Footer from "./Footer";
import { Nav, NavDropdown,Navbar,Container} from "react-bootstrap";
import Login from "../Component/Login";
// import RegiStration1 from "./CustomerRegister";
//import RegiStrationS from "./ServiceProviderRegister";

import { Logout } from "../Component/Logout";

import AddService from "./AddServiceVarad";
import AddLabour from "./AddLabour";
import ContactUs from "../landingPages/ContactUs";
import Footer from "../landingPages/Footer";
import ViewLabour from "./ViewLabour";
import EditSP from "./EditSP";
import ViewServicesSP from "./viewServicesVarad";
import SpOrders from "./SpOrders";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";

export default function SPDash(){
    const Navigate = useNavigate();
    const[selectedLink, setSelectedLink] = useState("Home");

    const handleLinkClick = (link)=>{
        setSelectedLink(link);
       // Navigate(`/${link}`)
    };

    useEffect(()=>{
        setSelectedLink('Home')
    },[]);

    const renderComponent = ()=>{
        switch(selectedLink){
            case "addservices": 
               return <AddService/>
            case "viewservice": 
               return <ViewServicesSP/>
            case "addlabour":
                 return <AddLabour/>
            case "viewlabour":
                 return <ViewLabour/>
            case "logout":
                 return <Logout/>
            case "contactus":
                 return <ContactUs/>
            case "editSP":
                 return <EditSP/>
            case "spOrder":
                 return <SpOrders/>
            default:
              return null;
        }
    }

    return(
        <>

        <div container mt-3>
        <div>
        <header >
        <div>
        
          <Navbar bg="dark" variant="dark" expand="lg"  >
          {/* <Navbar style={{ backgroundColor: 'orange' }}  expand="lg"  > */}
            <Container>
              <Navbar.Brand href="/">Home Glow Cleaning Services</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link  onClick={()=>{handleLinkClick('addservices')}}>Add Services</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('viewservice')}}>View Service</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('spOrder')}}>Order Status</Nav.Link>
                  <Nav.Link  onClick={()=>{handleLinkClick('addlabour')}}>Add Labour</Nav.Link>
                  <Nav.Link  onClick={()=>{handleLinkClick('viewlabour')}}>View Labour</Nav.Link>
                  <Nav.Link  onClick={()=>{handleLinkClick('editSP')}}>Edit Profile</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('logout')}}>Logout</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('contactus')}}>Contact Us?</Nav.Link>
                  {/* <Nav.Link  onClick={() => handleLinkClick('')}>  <i className='fas fa-user'></i> Log In</Nav.Link> */}
                  {/* <NavDropdown
                    id="nav-dropdown-primary-example"
                    title="Register"
                    menuVariant="light">
                    <NavDropdown.Item onClick={()=>{handleLinkClick('regcus')}}>Customer</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=> {handleLinkClick('regsp')}}>Service Provider</NavDropdown.Item> */}
                    {/* <a href="/regcus"class="fw-bold text-body mx-2"><u>Customer</u></a><br/>
                          <a href="/regsp" class="fw-bold text-body mx-2"><u>Service Provider</u></a> 
                  </NavDropdown>*/}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
        </div>
        </div>
        

        <div>
            {renderComponent()}
        </div>

        <Footer/>
        
        </>
    )
}
