import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import Branding from './branding/branding';
import Navigation from './navigation';

const defaultTheme = {
  theme: {
    colors: {
      primary: '#333'
    }
  }
};

const Wrapper = styled.header`
  border-bottom: 10px solid ${props => props.theme.colors.primary};
  margin-bottom: 1.45rem;
  padding: 1em 0;
`;

Wrapper.defaultProps = defaultTheme;

class Header extends Component {
  render(){
    return(
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={12}>
              <Branding
                title={this.props.siteTitle}
                tagline={this.props.siteTagline} />
            </Col>
            <Col xs={12}>
              <Navigation />
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Header;
