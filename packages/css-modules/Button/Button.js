import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const HiButton = () => (
  <button className={styles.button}> HI </button>
);

export const OtherButton = ({ type, children }) => (
  <button className={styles.button} type={type}> { children } </button>
)

//Other option
export const Button = ({ type, children, className }) => (
  <button className={cx('button', type, className)}> { children } </button>
);
