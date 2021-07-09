import React from 'react'
import styled from 'styled-components'
function Card() {
    return (
        <Container>
             <ImgWrapper>
                 <img src="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png" alt=""/>
             </ImgWrapper>
             <InfoWrapper>
                  <h4>Meme Card</h4>
                  <p>This is meme card for learn react with fun</p>
             </InfoWrapper>
        </Container>
    )
}


const Container=styled.div`
  width:40vw;
  height:50vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  /* justify-content:center; */
  padding-top:0.5rem;
  padding-left:0.5rem;
  padding-right:0.5rem;
  
  /* background-color:green; */
  border-radius:0.5rem;
  box-shadow:0 0.5rem 1rem rgba(0,0,0,0.7);

  @media (max-width:768px){
      width:50vw;
  }
`


const ImgWrapper=styled.div`
 width:100%;
 object-fit:contain;
 border-radius:0.5rem;
 overflow:hidden;
  
 img{
     width:100%;
 }

 
`


const InfoWrapper=styled.div`
  margin-top:1rem;
  margin-bottom:1rem;
  h4{
     font-size:2.5rem;
     color:blue;
     margin-top:0.5rem;
 }
 p{
     font-size:1.5rem;
     font-weight:500;
     margin-top:0.5rem;
 }

 @media (max-width:768px){
     margin:0;
 }
`
export default Card
