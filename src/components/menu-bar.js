import React, { Component } from 'react';
import styled from 'styled-components';
import NavigationList from './navigation-list';

const MenuBarWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5px 4em;
  background: #ccc;
  font-size: 10px;

  &.nav-open{
    left: 70%;
  }
`;

const MenuLink = styled.a`
  display: inline-block;
  margin: 30px 0 0 -20px;
  position: relative;

  color: ${props => props.theme.colors.primary };
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;

  outline: 1px dashed red;

  &::before, &::after {
    content: "";
    display: block;
    margin: 0 0 0 -20px;
    width: 40px;
    height: 4px;
    position: absolute;

    left: 50%;
    background:${props => props.theme.colors.primary };
    transition: all .3s ease-out;
  }

  &::before {
    top: -10px;
  }

  &:after {
    top: -20px;
  }

  &.nav-open{
    color: ${props => props.theme.colors.highlight };

    &::before, &::after {
      background: ${props => props.theme.colors.highlight };
    }

    &::before {
      top: -15px;
      transform: rotate(45deg);
    }

    &::after {
      top: -15px;
      transform: rotate(-45deg);
    }
  }
}
`;

const MenuBar = ({ navOpen, onNavToggle }) =>{
  return(
    <MenuBarWrapper className={ navOpen ? 'nav-open' : 'nav-close' }>
      <MenuLink
        className={ navOpen ? 'nav-open' : 'nav-close' }
        onClick={ () => onNavToggle()  }>
        Menu
      </MenuLink>
    </MenuBarWrapper>
  );
}

export default MenuBar;
