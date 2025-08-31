import styled from 'styled-components';


export const Background = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(0,0,0, 0.7);
z-index: 5;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
@media screen and (max-width: 900px) {

}
`
export const Container = styled.div`
background-color: #000;
width: 70%;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
padding: 50px;
max-width: 1200px;
iframe{
    border: none;
}
@media screen and (max-width: 900px) {

}
`