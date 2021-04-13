import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background: red;
  border: 1px dotted black;
  border-radius: 5px;
  padding: 5px;
`


export const SharedButton = ({onClick, children}) => {
    return <Button onClick={onClick}>{children}</Button>
}