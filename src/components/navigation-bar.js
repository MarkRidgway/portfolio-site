import React from 'react';
import styled from 'styled-components';
import NavigationList from './navigation-list';

const Nav = styled.nav`
  /* hide */
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  position: relative;
  bottom: -2.5em;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.4s ease, bottom 0.3s ease;

  text-align: center;
  font-size: 1.2rem;

  li{
      display: inline-block;
      margin: 0 0.5em 0 0;

      &::after{
        display: inline-block;
        margin-left: 0.5em;
        font-size: 0.8em;
        opacity: 0.3;
        content: "|";
      }
      &:last-of-type{
        margin-right: 0;

        &::after{
          display: none;
        }
      }
    }
  }

  a{
    font-size: 1em;
    color: ${props => props.theme.colors.secondary };
  }

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    /* show */
    width: auto;
    height: auto;
    max-height: auto;
    visibility: visible;
    opacity: 1;
    bottom: 0;
  }
`;

const NavigationBar = () => (
  <Nav>
    <NavigationList icons={ true } />
  </Nav>
);

export default NavigationBar;
