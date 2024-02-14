import React from 'react';
import {Navbar, Nav, Container,Image,NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {

  return(
    <header>
      <Navbar className='navbar-style' expand="lg">
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand href="/">
            <Image src="images/logo.jpg" className='logo-style'
                roundedCircle alt="VTU" />
            <h6 className='logo-name'>Visvesvaraya Technological University,Belagavi </h6>
          </Navbar.Brand>
          </LinkContainer>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to='/'>
              <Nav.Link href="#">Home</Nav.Link>
            </LinkContainer>
          
          <LinkContainer to='/about'>
             <Nav.Link href="#link">About Us</Nav.Link>
          </LinkContainer>
          

            <NavDropdown title="Academic" id="basic-nav-dropdown">
            <LinkContainer to='/admission'>
              <NavDropdown.Item href="#">Admission</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to='/circular/notification'>
            <NavDropdown.Item href="#">Circular & Notification</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to='/certificate'>
            <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
            </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Examination" id="basic-nav-dropdown">
            <LinkContainer to='/examination/guidlines'>
            <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to='/examination/application'>
            <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
            </LinkContainer>
           
            <LinkContainer to='/result/loginpage'>
            <NavDropdown.Item href="#">Results</NavDropdown.Item>
            </LinkContainer>
            </NavDropdown>

            <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
            <LinkContainer to='/civil'>
            <NavDropdown.Item href="#">Civil Engg</NavDropdown.Item>
            </LinkContainer>
           
            <LinkContainer to='/computerscience'>
            <NavDropdown.Item href="#">Computer Science & Engg</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to='/electronic'>
            <NavDropdown.Item href="#">Electronic & Communication Engg</NavDropdown.Item>
            </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Staff Login" id="basic-nav-dropdown">
            <LinkContainer to='/loginasadmin'>
            <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
            </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

       </Container>

      </Navbar>
    </header>
    )
}

export default Header