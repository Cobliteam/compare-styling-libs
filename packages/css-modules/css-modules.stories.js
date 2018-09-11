import React from 'react';
import { storiesOf } from '@storybook/react';

import { HiButton, Button, OtherButton } from './Button/Button';
import Main from './Main/Main';
import ButtonWithCustomStyle from './ButtonWithCustomStyle/ButtonWithCustomStyle';

storiesOf('css-modules', module)
  .add('HiButton', () => (
    <HiButton />
  ))
  .add('Secondary Button', () => (
    <Button type='secondary'> Click here </Button>
  ))
  .add('Other secondary button', () => (
    <OtherButton type='secondary'>  Click here </OtherButton>
  ))
  .add('Main', () => (
    <Main />
  ))
  .add('ButtonWithCustomStyle', () => (
    <ButtonWithCustomStyle />
  ));
