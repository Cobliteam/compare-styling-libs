import React from 'react';
import { storiesOf } from '@storybook/react';

import HiButton from './Button';

storiesOf('styled/Button', module)
  .add('Button', () => (
    <HiButton />
  ));
