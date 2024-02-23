import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import bG from './bg1.jpg';
// import AboutUs from "../components/AboutUs";
// import ContactUs from "../components/ContactUs";
// import UserLogin from "../components/UserLogin";
// import UserRegistration from "../components/UserRegistration";
// import ClubRegistration from '../ClubComponent/ClubRegistration';

import Header from "./Header";
import Footer from "./Footer";
import { Nav, NavDropdown,Navbar,Container} from "react-bootstrap";
import Login from "../Component/Login";
import RegiStration1 from "../CustomerComponents/CustomerRegister";
import RegiStrationS from "../SPComponents/ServiceProviderRegister";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

export default function LandingPage(){
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
            case "aboutus": 
               return <AboutUs/>
            case "login":
                 return <Login/>
            case "ContactUs":
                 return <ContactUs/>
            case "regsp":
                 return <RegiStrationS/>
            case "regcus":
                 return <RegiStration1/>
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
            <Container>
              <Navbar.Brand href="/">Home Glow Cleaning Services</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link  onClick={()=>{handleLinkClick('aboutus')}}>About Us</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('ContactUs')}}>Contact Us</Nav.Link>
                  <Nav.Link  onClick={() => handleLinkClick('login')}>  <i className='fas fa-user'></i> Log In</Nav.Link>
                  <NavDropdown
                    id="nav-dropdown-primary-example"
                    title="Register"
                    menuVariant="light">
                    <NavDropdown.Item onClick={()=>{handleLinkClick('regcus')}}>Customer</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=> {handleLinkClick('regsp')}}>Service Provider</NavDropdown.Item>
                    {/* <a href="/regcus"class="fw-bold text-body mx-2"><u>Customer</u></a><br/>
                          <a href="/regsp" class="fw-bold text-body mx-2"><u>Service Provider</u></a> */}
                  </NavDropdown>
                  
                </Nav>
              </Navbar.Collapse>
       

            </Container>
          </Navbar>
        </div>
      </header>
        </div>
        </div>
        <div style={{ position: 'relative' }}>
                <img src={bG} height={1000} width={1600} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    {renderComponent()}
                </div>
                        

         
        </div>
        {/* <Footer/> */}
        </>
    )
}
