import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItem>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>About Us
                            </FooterLink>
                            <FooterLink to='/signin'>How it works
                            </FooterLink>
                            <FooterLink to='/signin'>Testimonials
                            </FooterLink>
                            <FooterLink to='/signin'>Careers
                            </FooterLink>
                            <FooterLink to='/signin'>Investors
                            </FooterLink>
                            <FooterLink to='/signin'>Terms of service
                            </FooterLink>
                    </FooterLinkItem>

                    <FooterLinkItem>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/signin'>Submit Video
                            </FooterLink>
                            <FooterLink to='/signin'>Ambassadors
                            </FooterLink>
                            <FooterLink to='/signin'>Ageny
                            </FooterLink>
                            <FooterLink to='/signin'>Influencer
                            </FooterLink>
                    </FooterLinkItem>

                    <FooterLinkItem>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/signin'>Contact
                            </FooterLink>
                            <FooterLink to='/signin'>Support
                            </FooterLink>
                            <FooterLink to='/signin'>Destinations
                            </FooterLink>
                            <FooterLink to='/signin'>Sponsorships
                            </FooterLink>
                    </FooterLinkItem>

                    <FooterLinkItem>
                        <FooterLinkTitle>Soicel Media</FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram
                            </FooterLink>
                            <FooterLink to='/signin'>Facebook
                            </FooterLink>
                            <FooterLink to='/signin'>Youtube
                            </FooterLink>
                            <FooterLink to='/signin'>Twitter
                            </FooterLink>
                    </FooterLinkItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        dolla
                    </SocialLogo>
                    <WebsiteRights>dolla {new Date().getFullYear()}
                    All right reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" arial-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;