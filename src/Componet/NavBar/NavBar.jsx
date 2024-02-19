
 import {  FaCalendarCheck } from "react-icons/fa"; 
import "./Navbar.css";
import { SlArrowDown } from "react-icons/sl";
import logo from "../../assets/imges/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
      
            <Navbar expand="lg" className="Navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="logo">
                            <img src={logo} />
                            <button className="btnClub">
                                <FaCalendarCheck />
                                club access</button>
                        </div>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#home" className="links">Explore </Nav.Link>
                            <Nav.Link href="#link" className="links">Product <SlArrowDown /></Nav.Link>

                            <Nav.Link href="#link" className="links">Resources <SlArrowDown /></Nav.Link>
                            <Nav.Link href="#link" className="links">pricing </Nav.Link>
                        

                        </Nav>
                        <div>
                        <button className="login"> login</button>
                        <button className="sign">sign up</button>
                    </div>
                    </Navbar.Collapse>
                   
                </Container>
            </Navbar>

    
    )
}

export default NavBar
{/* <div className="navbar">
			<nav ref={navRef}>
            <div className="logo">
            <img src={logo}/>
            <button className="btnClub">
                <FaCalendarCheck />
                 club access</button>
            </div>
            <div className="links">
            <a href="/#">Explore</a>
				<a href="/#">Product <SlArrowDown /></a>
				<a href="/#"> Resources<SlArrowDown /></a>
				<a href="/#">Pricing</a>
            </div>
				
				<div className="btns">
                <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
                <button className="login"> login</button>
                <button className="sign">sign up</button>
                </div>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</div> */}

/*
 
 
import "./Navbar.css";
import { SlArrowDown } from "react-icons/sl";
import logo from "../../assets/imges/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbar() {

return (
<Navbar expand="lg" className="bg-body-tertiary">
<Container>
<Navbar.Brand href="#home">
<div className="logo">
    <img src={logo}/>
    <button className="btnClub">
        <FaCalendarCheck />
         club access</button>
    </div>

</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">
    <Nav.Link href="#home">Explore </Nav.Link>
    <Nav.Link href="#link">Product <SlArrowDown /></Nav.Link>
    
    <Nav.Link href="#link">Resources <SlArrowDown /></Nav.Link>
    <Nav.Link href="#link">pricing </Nav.Link>
   
    
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>





);
}

export default Navbar;*/