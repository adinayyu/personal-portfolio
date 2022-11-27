import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode, SiHackerrank, SiCodechef, SiHackerearth } from 'react-icons/si';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Mobile no</LinkTitle>
          <LinkItem href="tel:314-343-3432">6309981339</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:adinayyu@gmail.com">
            adinayyu@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning something new always</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/adinayyu">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/adithya-a-b57a9410b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrVmws6XgSkKjIey3mNeKrA%3D%3D">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://leetcode.com/adinayyu/">
            <SiLeetcode size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.hackerrank.com/adinayyu">
            <SiHackerrank size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.codechef.com/users/adithya_nayan">
            <SiCodechef size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.hackerearth.com/@adinayyu">
            <SiHackerearth size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
