import styled from 'styled-components';
const Div = styled.div`
    margin: auto;
    background: antiquewhite;
    padding: 10px;
  width: 100%;
`


export const Paper = ({children}) => <Div>{children}</Div>