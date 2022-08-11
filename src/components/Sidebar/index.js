import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon onClick={toggle}/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='/about'>
              About
            </SidebarLink>
            <SidebarLink to='/discover'>
              Discover
            </SidebarLink>
            <SidebarLink to='/servicves'>
              Services
            </SidebarLink>
            <SidebarLink to='/signup'>
              Sign Up
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;