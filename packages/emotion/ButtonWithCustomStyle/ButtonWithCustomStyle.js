import React from 'react';
import Button from '../Button/Button';
import { button } from './style';

const ButtonWithCustomStyle = () => (
  <Button type='secondary' className={button}> Click here </Button>
);

export default ButtonWithCustomStyle;
