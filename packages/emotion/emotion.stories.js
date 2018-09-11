import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button/Button';
import Main from './Main/Main';
import ButtonWithCustomStyle from './ButtonWithCustomStyle/ButtonWithCustomStyle';

storiesOf('emotion', module)
  .add('Button', () => (
    <Button> Click here </Button>
  ))
  .add('Main', () => (
    <Main />
  ))
  .add('ButtonWithCustomStyle', () => (
    <ButtonWithCustomStyle />
  ))
  ;
