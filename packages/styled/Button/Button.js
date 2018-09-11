import React from 'react';
import { Button as BaseButton } from './style.js'

export const HiButton = () => (
  <BaseButton> HI </BaseButton>
);

export const Button = ({ type, children, className }) => (
  <BaseButton type={type} className={className}>{children}</BaseButton>
);

export default HiButton;
