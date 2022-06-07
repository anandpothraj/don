import React, { useContext }  from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { Theme } from '../Context';

const Header = () => {

  const { theme, setTheme } = useContext(Theme)
  
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
                <Navbar.Brand><BsFillMoonStarsFill onClick={()=>setTheme("dark")}/></Navbar.Brand>
                : 
                <Navbar.Brand><BsFillSunFill onClick={()=>setTheme("primary")} style={{color:"yellow"}}/></Navbar.Brand>
              }
            </Nav>
          </Container>
        </Navbar>
    </>
  )
}

export default Header;




