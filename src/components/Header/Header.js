import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode, SiHackerrank, SiCodechef, SiHackerearth } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <CgWebsite size="3rem" /> <span>My Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>My Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About me</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
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
      </Div3>
    </Container>
);

export default Header;
