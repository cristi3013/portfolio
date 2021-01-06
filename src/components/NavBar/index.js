import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavBarElements';

function NavBar({ toggle }) {
  const [scrollNav, setscrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to='/'>CV</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='expertise'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Expertise
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='mywork'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                My Work
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
