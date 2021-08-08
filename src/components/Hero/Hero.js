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
          The main purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
        </SectionText>
        <Button onClick = {() => window.location = 'https://linkedin.com/in/sailendrachettri'}>Learn more</Button>
    </LeftSection>
  </Section>
); 

export default Hero;