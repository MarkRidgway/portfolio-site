import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'
import { FaCodepen, FaTwitter, FaLinkedinSquare, FaGithubSquare } from 'react-icons/lib/fa/';

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
        { this.showHome() }
        <li><Link activeClassName='active' to='/about'>About Me</Link></li>
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
        <li><a href='https://codepen.io/MarkJames/'>
          <IconOrText
            showIcon={ this.props.icons }
            icon={ <FaCodepen /> }
            text='CodePen'
          />
        </a></li>
        <li><a href='https://twitter.com/heyridg'>
          <IconOrText
            showIcon={ this.props.icons }
            icon={ <FaTwitter /> }
            text='Twitter'
          />
        </a></li>
      </NavList>
    );
  }

  showHome(){
    if(this.props.showHome){
      return(
        <li><Link activeClassName='active' to='/'>Portfolio</Link></li>
      );
    }
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
