import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="footer_container">
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <div className="footer_logo_container">
            <img height="30"  src={require('../images/Logos/nu-moves-high-resolution-logo-transparent-background.png')} />
              <p className="footer_description">
                All Your Household Needs Under One Roof
              </p>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <h5 className="about_us_heading">POLICY</h5>
            <ul className="navlinks">
              <li className="navlink">
                <a href="#/">Return Policy</a>
              </li>
              <li className="navlink">
                <a href="#/">Terms of Use </a>
              </li>
              <li className="navlink">
                <a href="#/">Security</a>
              </li>
              <li className="navlink">
                <a href="#/">Privacy</a>
              </li>
            </ul>
          </Col>
          <Col md={4} xs={12}>
            <h5 className="about_us_heading">CONTACT US</h5>
            <ul className="navlinks">
            <li className="nav_li">
                <p className="navlink">numoves@northeastern.edu</p>
              </li>
              <li className="nav_li">
                <p className="navlink"> +1 258-723-5656</p>
              </li>
              <li className="nav_li">
                <p className="navlink">
                67 huntington st cortland, Boston 
                </p>
              </li>
              
            </ul>
          </Col>
        </Row>
        <hr />
        <p className='text-center'>2022 © NU MOVES - Made for NU Huskies</p>
      </Container>
    </div>
  )
}

export default Footer
