import styled from 'styled-components'

export const Background = styled.div`
background-image: url(${(props) => props.$img});
height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}
.movpre{
    z-index: 1;
}
.previ{
    z-index: 1;
}
@media screen and (max-width: 900px){
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 1300px;
   .movpre{
    display: flex;
    flex-direction: column-reverse;
    z-index: 2;
   }
   body{
    
    border: solid white;
   }
}

`
export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
max-width: 1400px;
@media screen and (max-width: 900px){
    width: 100%;
    display: flex;
    
    flex-direction: column;
    align-items: center;
  .previ{
   padding-top: 40px;
    z-index: 2;
  }
}
`

export const Info = styled.div`
z-index: 2;
padding: 20px;
width: 50%;
h1{
font-size: 5rem;
font-weight: 700;
color: white;
}
p{
    font-size: 20px;
    font-weight: 500;
    color: white;

}
@media screen and (max-width: 900px){
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1{
        margin-top: 20%;
        font-size: 4rem;
    }


}
`
export const Poster = styled.div`
z-index: 2;
img{
    width: 400px;
    border-radius: 30px;
}
@media screen and (max-width: 900px){
    
    img{
        width: 300px;
    }
}

`
export const Containerbutton = styled.div`
display: flex;
flex-direction: column;
z-index: 3;
display: flex;
gap: 20px;
margin-top: 30px;

`