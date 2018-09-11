import React from 'react';

import { Button as BaseButton, otherButton } from './style.js'

const Button = ({ type, children, className}) => (
  <BaseButton type={type} className={className}>
    {children}
  </BaseButton>
);

// Does not work
// const Button = (props) => {
//   return(
//     <button
//       onClick={() => alert('Hi')}
//       className={otherButton(props)}
//     >
//       {props.children}
//     </button>
//   )
// }

export default Button;
