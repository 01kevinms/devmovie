import styled,{css} from 'styled-components';

const button = css`
border: 3px solid white;
background: transparent;
color: white;
border-radius: 30px;
padding: 10px 20px;
cursor: pointer;
font-size: 20px;
font-weight: 700;
&:hover{
    background: white;
    color: red;
}

`
export const $Buttonred = styled.button`
${button}
background: #ff0000;
border: 4px solid transparent;
box-shadow: 0px 0px 7px 8px rgb(255 0 0 /30%);

&:hover{
 background: #ff0000;
 box-shadow: 0px 0px 7px 8px rgb(255 0 0 /30%);
color: white;
}
`
export const ButtonWhite = styled.button`
${button}
`