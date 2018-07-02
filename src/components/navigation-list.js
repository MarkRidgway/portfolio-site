import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'
import { FaLinkedinSquare, FaGithubSquare } from 'react-icons/lib/fa/';

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li{
    margin: 0;
    padding: 0;
  }

  a{
    font-size: 1em;
  }
`;

class NavigationList extends Component{
  render(){
    return(
      <NavList>
        <li><a href='https://www.linkedin.com/in/markridgway/'>
          <IconOrText
            showIcon={ this.props.icons }
            icon={ <FaLinkedinSquare /> }
            text='LinkedIn'
          />
        </a></li>
        <li><a href='https://github.com/MarkRidgway'>
          <IconOrText
            showIcon={ this.props.icons }
            icon={ <FaGithubSquare /> }
            text='GitHub'
          />
        </a></li>
        <li><Link activeClassName='active' to='/about'>About</Link></li>
        <li><Link activeClassName='active' to='/'>Blog</Link></li>
        <li><Link activeClassName='active' to='/contact'>Contact</Link></li>
      </NavList>
    );
  }
}

class IconOrText extends Component{
  render(){
    if( this.props.showIcon ){
      return( this.props.icon )
    }
    else{
      return(
        <span>{ this.props.text }</span>
      );
    }
  }
}

export default NavigationList;
