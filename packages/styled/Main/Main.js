import React from 'react';
import { Button } from '../Button/Button';
import { Section, Paragraph } from './style.js';

const Main = () => (
  <Section>
    <Paragraph>
      Look at my buttons, they are amazing buttons !
    </Paragraph>
    <Button type="primary">
      A Primary Button
    </Button>
    <Button type="secondary" color='blue'>
      And I am a secondary
    </Button>
  </Section>
 );

export default Main;
