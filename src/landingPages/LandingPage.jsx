import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import UserLogin from "../components/UserLogin";
import UserRegistration from "../components/UserRegistration";
import ClubRegistration from '../ClubComponent/ClubRegistration';

import Header from "./Header";
import Footer from "./Footer";
import { Nav, NavDropdown,Navbar,Container} from "react-bootstrap";

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
            case "AboutUs": 
              return <AboutUs/>
            case "UserLogin":
                return <UserLogin/>
            case "ContactUs":
                return <ContactUs/>
            case "UserRegistration":
                return <UserRegistration/>
            case "ClubRegistration":
                return <ClubRegistration/>
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
              <Navbar.Brand href="/">Sahyadri Navigator</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link  onClick={()=>{handleLinkClick('AboutUs')}}>About Us</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('ContactUs')}}>Contact Us</Nav.Link>
                  <Nav.Link  onClick={() => handleLinkClick('UserLogin')}>  <i className='fas fa-user'></i> Sign In</Nav.Link>
                  <NavDropdown
                    id="nav-dropdown-primary-example"
                    title="Register"
                    menuVariant="light">
                    <NavDropdown.Item onClick={()=>{handleLinkClick('ClubRegistration')}}>Trekking club</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=> {handleLinkClick('UserRegistration')}}>Trekker</NavDropdown.Item>
                  </NavDropdown>
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
