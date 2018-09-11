import React from 'react';
import styles from './Main.scss';
import { Button } from '../Button/Button';

const Main = () => (
  <main className={styles.section}>
    <p className={styles.paragraph}>
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
