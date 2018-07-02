import React from 'react';
import styled, { keyframes } from 'styled-components';

const NavButon = styled.nav`
  cursor: pointer;
  width: ${ props => props.navSize }px;
  height: ${ props => props.navSize }px;
  padding: ${ props => { props.navSize / 4 }}px;
  position: relative;
  outline: 1px dashed blue;

  span {
    top: 50%;
    transform-origin: center center;
    /* animation-name: ${ materialMenu }; */

    &, &:before, &:after {
      z-index: 500;
      width: ${ props => { return props.navSize / 2 }}px;
      height: ${ props => { return Math.ceil(props.navSize / 20) }}px;
      position: absolute;
      background-color: ${ props => props.navColor };

      /* animation-duration: ${ props => props.animationTime };
      animation-fill-mode: forwards;
      animation-timing-function: ${ props => props.animationEasing };
      transition: background-color ${ props => props.animationTime } ${ props => props.animationEasing }; */
    }

    &:before, &:after {
      content: '';
      display: block;
    }

    &:before {
      top: 300%;
      transform-origin: right bottom;
      /* animation-name: ${ materialMenuBefore }; */
    }

    &:after {
      bottom: 300%;
      transform-origin: right top;
      /* animation-name: ${ materialMenuAfter }; */
    }
  }

  &.nav-open {
    outline: 1px dashed red;

    span, span:before, span:after {
      animation-duration: ${ props => props.animationTime };
      animation-fill-mode: forwards;
      animation-timing-function: ${ props => props.animationEasing };
      background-color: pink;
    }

    span 		{animation-name: ${ materialArrow };}
    span:before {animation-name: ${ materialArrowBefore };}
    span:after 	{animation-name: ${ materialArrowAfter };}
  }
`;

NavButon.defaultProps = {
  navSize: 50,
  navColor: '#445566',
  animationTime: '300ms',
  animationEasing: 'ease-in-out'
};

const HamburgerIcon = ({ navOpen, onNavToggle }) => (
  <NavButon className={navOpen ? 'nav-open' : 'nav-close'}>
    <span></span>
  </NavButon>
);

export default HamburgerIcon;

// const materialArrowBackground = keyframes`
//   100% 	{ transform: rotate(180deg) scale(0); }
// `;

// const materialMenuBackground = keyframes`
//   0% 		{ transform: rotate(180deg) scale(0); }
//   100% 	{ transform: rotate(360deg) scale(1); }
// `;

const materialArrow = keyframes`
  100% 	{ transform: rotate(180deg); }
`;

const materialArrowBefore = keyframes`
  100% 	{ top: 0; transform: rotate(-40deg) scaleX(0.7); }
`;

const materialArrowAfter = keyframes`
  100% 	{ bottom: 0; transform: rotate(40deg) scaleX(0.7);}
`;

const materialMenu = keyframes`
  0% 		{ transform: rotate(180deg); }
  100% 	{ transform: rotate(360deg); }
`;

const materialMenuBefore = keyframes`
  0% 		{ top: 0; 		transform: rotate(-40deg) scaleX(0.7); }
  100% 	{ top: 300%; 	transform: rotate(0) scaleX(1); }
`;

const materialMenuAfter = keyframes`
  0% 		{ bottom: 0; 	transform: rotate(40deg) scaleX(0.7); }
  100% 	{ bottom: 300%; transform: rotate(0) scaleX(1); }
`;