import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Individual Projects'},
  { number: 10, text: 'Skills', },
  { number: 15, text: 'Github Repositories', },
  { number: 0, text: 'Work Experience', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements(Stats)</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
