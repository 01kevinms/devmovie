import styled from 'styled-components';


export const Container = styled.div`
background: black;
padding: 0 20px;

h2{
    color: white;
    font-size: 24px;
    margin: 50px 0 20px 20px;
}
.swiper-wrapper{
    display: flex;
}
@media screen and (max-width: 900px){
 
 .swipe{
    width: 100vw;
  img{
    width: 150px;
  }
 }
}
`