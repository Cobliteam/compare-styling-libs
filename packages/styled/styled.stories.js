import React from 'react';
import { storiesOf } from '@storybook/react';

import HiButton from './Button/Button';
import Main from './Main/Main';
import ButtonWithCustomStyle from './ButtonWithCustomStyle/ButtonWithCustomStyle';

storiesOf('styled', module)
  .add('Button', () => (
    <HiButton />
  ))
  .add('Main', () => (
    <Main />
  ))
  .add('ButtonWithCustomStyle', () => (
    <ButtonWithCustomStyle />
  ))
  ;
