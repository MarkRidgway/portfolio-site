import React from 'react';
import styled from 'styled-components';
import { IoAndroidMenu } from 'react-icons/lib/io/';

const MenuBarWrapper = styled.div`
  width: 100%;
  height: auto;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    display: none;
  }

  &.nav-open{
    left: 70%;
  }
`;

const MenuLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5em 1.4em;
  color: ${ props => props.theme.colors.tertiary };
  font-size: 1.2em;
  cursor: pointer;
  background: ${ props => props.theme.colors.primary };
  transition: all 0.3s ease;


  &:hover, &:visited, &:active {
    color: ${ props => props.theme.colors.tertiary };
  }

  span{
    margin-left: 0.2em;
  }
`;

const MenuBar = ({ navOpen, onNavToggle }) =>{
  return(
    <MenuBarWrapper className={ navOpen ? 'nav-open' : 'nav-close' }>
      <MenuLink
        className={ navOpen ? 'nav-open' : 'nav-close' }
        onClick={ () => onNavToggle()  }>
        <IoAndroidMenu /><span>Menu</span>
      </MenuLink>
    </MenuBarWrapper>
  );
}

export default MenuBar;
