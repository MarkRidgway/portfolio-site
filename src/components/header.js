import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import Branding from './branding/branding';
import NavigationBar from './navigation-bar';

const defaultTheme = {
  theme: {
    colors: {
      primary: '#333'
    }
  }
};

const Wrapper = styled.header`
  border-bottom: 10px solid ${props => props.theme.colors.primary};
  padding: 1em 0;
  background: #fff;
`;

Wrapper.defaultProps = defaultTheme;

class Header extends Component {
  render(){
    return(
      <Wrapper>
        <Grid>
          <Row center='lg'>
            <Col xs={12} lg={8}>
              <Branding
                title={this.props.siteTitle}
                tagline={this.props.siteTagline} />
            </Col>
            <Col xs={12}>
              <NavigationBar />
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Header;
