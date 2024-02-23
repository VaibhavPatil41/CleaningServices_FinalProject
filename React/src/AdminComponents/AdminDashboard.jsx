import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"


// import Header from "./Header";
// import Footer from "./Footer";
import { Nav, NavDropdown,Navbar,Container} from "react-bootstrap";
import Login from "../Component/Login";
import RegiStration1 from "../CustomerComponents/CustomerRegister";
import RegiStrationS from "../SPComponents/ServiceProviderRegister";
import ApproveReq from "./approveRequest";
import { Logout } from "../Component/Logout";
import Footer from "../landingPages/Footer";
import BookingList from "./Transactions";
import FeedbackList from "./FeedbacksAdmin";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";

export default function AdminDash(){
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
            case "bookingListAdmin": 
               return <BookingList/>
            case "approve":
                 return <ApproveReq/>
            case "":
                 return 
            case "logout":
                 return <Logout/>
            case "feedbackAdmin":
                 return <FeedbackList/>
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
                  {/* <Nav.Link  onClick={()=>{handleLinkClick('')}}>Edit Profile</Nav.Link> */}
                  <Nav.Link onClick={()=>{handleLinkClick('approve')}}>Approval Requests</Nav.Link>
                  <Nav.Link  onClick={()=>{handleLinkClick('bookingListAdmin')}}>Transaction</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('feedbackAdmin')}}>Feedbacks</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('logout')}}>Logout</Nav.Link>
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
        {/* <Footer/> */}
        
        </>
    )
}
