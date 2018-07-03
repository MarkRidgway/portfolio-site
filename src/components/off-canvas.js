import React from 'react';
import styled from 'styled-components';
import NavigationList from './navigation-list';
import { darken } from 'polished'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  width: 70%;
  height: 100vh;
  position: absolute;
  top: 0;
  transition: left 0.3s ease;
  background: ${ props => props.theme.colors.primary };

  &.nav-closed{
    left: -70%;
  }

  &.nav-open{
    left: 0;
  }

  ul{
    flex: 0 0 auto;
  }

  li{
    display: block;
  }

  a{
    display: block;
    padding: 0.5em 1em;
    color: ${ props => props.theme.colors.tertiary };
    white-space: nowrap;
    border-bottom: 1px solid ${props => darken(0.1, props.theme.colors.secondary)};
    transition: all 0.3s ease;
    background: ${ props => props.theme.colors.secondary };

    &.active, &:hover{
      /* color: ${ props => props.theme.colors.secondary }; */
      /* background: ${ props => props.theme.colors.tertiary }; */

      background: ${ props => props.theme.colors.highlight };
    }
  }

  li:last-of-type a {
    border-bottom: none;
  }

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    display: none;
  }
`;

const CloseArea = styled.div`
  flex: 1 0 auto;
`;

const OffCanvas = ({ navOpen, onNavClose }) => (
  <Nav className={ navOpen ? 'nav-open' : 'nav-closed' }>
    <NavigationList showHome={ true } />
    <CloseArea onClick={ () => onNavClose() } />
  </Nav>
);

export default OffCanvas;
