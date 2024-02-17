import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, NavDropdown } from 'react-bootstrap';
import {  Navigate, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


export default function Header() {
  const Navigate = useNavigate();
  const handleSignInClick = () => {
    Navigate('/UserLogin');
  };
    return (
    <div>
      <header >
        <div>
          <Navbar bg="dark" variant="dark" expand="lg"  >
            <Container>
              <Navbar.Brand href="/">Sahyadri Navigator</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/Aboutus">About Us</Nav.Link>
                  <Nav.Link href="/Contactus">Contact Us</Nav.Link>
                  <Nav.Link  onClick={handleSignInClick}>  <i className='fas fa-user'></i> Sign In</Nav.Link>
                  <NavDropdown
                    id="nav-dropdown-primary-example"
                    title="Register"
                    menuVariant="light">
                    <NavDropdown.Item onClick={()=>{('ClubRegistration')}}>Trekking club</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=> {Navigate('UserRegistration')}}>Trekker</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </div>
  )
}