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
  margin: 3em 0 0 -2em;
  padding: 0 0 0 0;
  position: relative;

  color: ${props => props.theme.colors.primary };
  font-size: 1em;
  font-weight: 700;
  text-transform: uppercase;

  outline: 1px dashed red;

  span{
    font-size: 1.8em;
  }

  &::before, &::after {
    content: "";
    display: block;
    margin: 0 0 0 -2em;
    width: 4em;
    height: 0.4em;
    position: absolute;

    left: 50%;
    background:${props => props.theme.colors.primary };
    transition: all .3s ease-out;
  }

  &::before {
    top: -1em;
  }

  &:after {
    top: -2em;
  }

  &.nav-open{
    color: ${props => props.theme.colors.highlight };

    &::before, &::after {
      top: -1.5em
      background: ${props => props.theme.colors.highlight };
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
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
        <span>Menu</span>
      </MenuLink>
    </MenuBarWrapper>
  );
}

export default MenuBar;
