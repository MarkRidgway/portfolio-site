import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import Branding from './branding';

const defaultTheme = {
  theme: {
    colors: {
      primary: '#333'
    }
  }
};

const Wrapper = styled.header`
  background: ${props => props.theme.colors.primary};
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
            <Col xs={12} md>
              <Branding
                title={this.props.siteTitle}
                tagline={this.props.siteTagline} />
            </Col>
            <Col xs={12} md>
              <p>Navigation</p>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Header;
