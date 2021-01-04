import React from 'react';
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
  return (
    <>
      <Nav>
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
                activeClass='active'
              >
                Expertise
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='mywork'>My Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
