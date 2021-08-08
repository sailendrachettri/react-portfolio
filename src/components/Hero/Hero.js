import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section rwo nopadding>
    <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          My Personal Projects 
        </SectionTitle>
        <SectionText>
          I created this portfolio while learning react with 'JavaScript Mastery' video course on youtube.
        </SectionText>
        <Button onClick = {() => window.location = 'https://linkedin.com/in/sailendrachettri'}>Learn more</Button>
    </LeftSection>
  </Section>
); 

export default Hero;