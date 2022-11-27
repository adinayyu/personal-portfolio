import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJava, DiAndroid} from 'react-icons/di';
import {FaEthereum} from 'react-icons/fa';
import {GrJava} from 'react-icons/gr';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies(Skills/Languages/Tools)</SectionTitle>
    <SectionText>
      I have worked with following technologies and languages
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js<br />
            Next.js<br />
            HTML <br />
            CSS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            SQL<br />
            Javascript<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programmming Languages</ListTitle>
          <ListParagraph>
            Java <br />
            Python <br />
            C <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Android Development</ListTitle>
          <ListParagraph>
            Flutter <br />
            Java <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaEthereum size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Solidity <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GrJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DSA using Java</ListTitle>
          <ListParagraph>
            Java Collections <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
