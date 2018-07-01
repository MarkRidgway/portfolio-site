import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'
import { FaLinkedinSquare, FaGithubSquare } from 'react-icons/lib/fa/';

const NavWrapper = styled.div`

`;

const Nav = styled.ul`
  list-style: none;
  font-size: 1rem;
  text-align: center;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    font-size: 1.2rem;
  }

  li{
    @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
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
`;

const Navigation = () => (
  <NavWrapper>
    <Nav>
      <li><a href='https://www.linkedin.com/in/markridgway/'><FaLinkedinSquare /></a></li>
      <li><a href='https://github.com/MarkRidgway'><FaGithubSquare /></a></li>
      <li><Link to='http://www.google.com'>About</Link></li>
      <li><Link to='/'>Blog</Link></li>
      <li><Link to='/'>Contact</Link></li>
    </Nav>
  </NavWrapper>
);

export default Navigation;
