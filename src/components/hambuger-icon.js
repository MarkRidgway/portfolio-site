import React from 'react';
import styled, { keyframe } from 'styled-components';

const NavButon = styled.nav`
  cursor: pointer;
  padding: (${ props => props.navSize } / 4);
  position: relative;
  width: ${ props => props.navSize };
  height: ${ props => props.navSize };

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${ props => props.navColorActive };
    animation: ${ materialMenuBackground } ${ props => props.animationTiming } ${ props => props.animationEasgin} forwards;
  }

  span {
    top: 50%;
    transform-origin: center center;
    animation-name: ${ materialMenu };

    &, &:before, &:after {
      width: (${ props => props.navSize } / 2);
      background-color: ${ props => props.navColor };
      height: ceil(${ props => props.navSize } / 20);
      position: absolute;
      z-index: 500;
      animation-duration: ${ props => props.animationTiming };
      animation-fill-mode: forwards;
      animation-timing-function: ${ props => props.animationEasgin};
      transition: background-color ${ props => props.animationTiming } ${ props => props.animationEasgin};
    }

    &:before, &:after {
      content: '';
      display: block;
    }

    &:before {
      top: 300%;
      transform-origin: right bottom;
      animation-name: ${ materialMenuBefore };
    }

    &:after {
      bottom: 300%;
      transform-origin: right top;
      animation-name: ${ materialMenuAfter };
    }
  }

  &.material--arrow {
    &:after {
      animation: ${ materialArrowBackground } ${ props => props.animationTiming } ${ props => props.animationEasgin} forwards;
    }

    span, span:before, span:after {
      animation-duration: ${ props => props.animationTiming };
      animation-fill-mode: forwards;
      animation-timing-function: ${ props => props.animationEasgin};
      background-color: ${ props => props.navColorActive };
    }

    span 		{animation-name: ${ materialArrow };}
    span:before {animation-name: ${ materialArrowBefore };}
    span:after 	{animation-name: ${ materialArrowAfter };}
  }
`;

NavButon.defaultProps = {
  navSize: '50px',
  navColor: '#fff',
  navColorActive: '#445566',
  animationTime: '300ms',
  animationEasing: 'ease-in-out'
};

const HamburgerIcon = ({ navOpen, onNavToggle }) => (
  <NavButon>
    <div className={navOpen ? 'material--arrow material--burger' : 'material--burger'}>
      <span></span>
    </div>
  </NavButon>
);

export default HamburgerIcon;

const materialMenuBackground = keyframe`
  0% 		{ transform: rotate(180deg) scale(0); }
  100% 	{ transform: rotate(360deg) scale(1); }
`;

const materialArrow = keyframe`
  100% 	{ transform: rotate(180deg); }
`;

const materialArrowBefore = keyframe`
  100% 	{ top: 0; transform: rotate(-40deg) scaleX(0.7); }
`;

const materialArrowAfter = keyframe`
  100% 	{ bottom: 0; transform: rotate(40deg) scaleX(0.7);}
`;

const materialMenu = keyframe`
  0% 		{ transform: rotate(180deg); }
  100% 	{ transform: rotate(360deg); }
`;

const materialMenuBefore = keyframe`
  0% 		{ top: 0; 		transform: rotate(-40deg) scaleX(0.7); }
  100% 	{ top: 300%; 	transform: rotate(0) scaleX(1); }
`;

const materialMenuAfter = keyframe`
  0% 		{ bottom: 0; 	transform: rotate(40deg) scaleX(0.7); }
  100% 	{ bottom: 300%; transform: rotate(0) scaleX(1); }
`;