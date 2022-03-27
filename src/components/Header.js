import React  from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const Header = (props) => {

  const theme = props.darkMode;

  return (
    <>
        <Navbar bg={theme} variant="dark" id="nav">
          <Container className='m-auto'>
            <Navbar.Brand>
            <a href="/" className=' header text-decoration-none text-light mx-1 navlink'>
              News-Space
            </a>
            </Navbar.Brand>
            <Nav>
              {
                (theme === 'primary')?
                <Navbar.Brand><BsFillMoonStarsFill onClick={()=>props.setTheme("dark")}/></Navbar.Brand>
                : 
                <Navbar.Brand><BsFillSunFill onClick={()=>props.setTheme("primary")} style={{color:"yellow"}}/></Navbar.Brand>
              }
            </Nav>
          </Container>
        </Navbar>
    </>
  )
}

export default Header;




