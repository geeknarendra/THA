import './App.css';
import styled from 'styled-components'


function Calorie({food,cal}){
    return(
        <Container>
            <h2>{food}</h2>
            <p>you have consumed {cal} cals today</p>

        </Container>
    )
}

const Container=styled.div`
   width:100%;
   height:auto;
   background-color:grey;
   color:#fff;
   padding-top:1rem;
   padding-bottom:1rem;
   margin-bottom:1rem;
   border-radius:1rem;
   h2{
       font-size:1.5rem;
       margin-left:1rem;
   }
   p{
       font-weight:600;
       font-size:1.2rem;
       margin-top:1rem;
       margin-left:1rem;
   }
`

export default Calorie