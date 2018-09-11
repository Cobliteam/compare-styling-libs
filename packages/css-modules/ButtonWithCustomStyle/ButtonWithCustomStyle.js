import React from 'react';
import { Button } from '../Button/Button';
import style from './ButtonWithCustomStyle.scss';

const ButtonWithCustomStyle = () => (
  <Button className={style.button} type='secondary'> Click here </Button>
);

export default ButtonWithCustomStyle;
