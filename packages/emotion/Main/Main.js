import React from 'react';

import Button from '../Button/Button';
import { section, paragraph } from './style.js';

const Main = () => (
  <main className={section}>
    <p className={paragraph}>
      Look at my buttons, they are amazing buttons !
    </p>
    <Button type="primary">
      A Primary Button
    </Button>
    <Button type="secondary">
      And I am a secondary
    </Button>
  </main>
 );

export default Main;
