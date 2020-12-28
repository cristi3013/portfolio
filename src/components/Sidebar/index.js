import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='about' onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to='expertise' onClick={toggle}>
              Expertise
            </SidebarLink>
            <SidebarLink to='mywork' onClick={toggle}>
              My Work
            </SidebarLink>
            <SidebarLink to='contact' onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
