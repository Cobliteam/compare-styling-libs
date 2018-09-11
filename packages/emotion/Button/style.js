import styled, { css } from 'react-emotion';

export const Button = styled('button')`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: blue;
  border: 2px solid gray;
  ${p => p && p.type == 'secondary' && css`
    background: white;
    color: palevioletred;
  `}
 `

// does not work
export const otherButton = p => {
  return (css`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: blue;
    border: 2px solid gray;
    ${p => p && p.type == 'secondary' && css`
      background: white;
      color: palevioletred;
    `}
  `)
}

 // Other option would be to export just the style:
 export const ButtonStyles = css`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  ${p => p && p.secondary`
    background: white;
    color: palevioletred;
  `}
 `

/*
 and import as:

 const Button = styled.button`${ButtonStyles};`;

 But it seems the first approach is more common
*/
