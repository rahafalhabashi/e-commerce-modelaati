import React from 'react';
import footerImg from './MODELAATI-footer-logo.png'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

function Footer() {
    return (
        <Box>
            <div align="center"style={{paddingBottom: '0', marginBottom:`0`}}>
                <img src={footerImg} alt="footerLogo" style={{width: '10%'}}/>
            </div>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Mission</FooterLink>
                        <FooterLink href="#">How We Got Here</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Return Policy</FooterLink>
                        <FooterLink href="#">Join the Team</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        {/* <FooterLink href="#">Teaching</FooterLink> */}
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Store Location</FooterLink>
                        <FooterLink href="#">Leave a Review</FooterLink>
                        <FooterLink href="#">Indore</FooterLink>
                        <FooterLink href="#">Mumbai</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
                {/* <div align="center">
                    <h5 align="center">Modelaati</h5>
                    <h6>1234 Alphabet Ave.</h6>
                    <h6>New York, NYC</h6>
                </div> */}
            </Container>
        </Box>
    )
}

export default Footer