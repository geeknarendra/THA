import './App.css';
import styled from 'styled-components'


function Calorie({food,calorie,list,setList,index}){
  
    function onDeleted(){
        const newList=list.filter((item,indx)=>{
            console.log(index)
            if(index!=indx){
                return item
            }
        })
        // setList(newList)
    }
    

    return(
        <Container>
            <span>{food}</span>
            <button onClick={onDeleted}>Delete</button>
            <p>you have consumed {calorie} cals today</p>
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
   span{
       font-size:1.5rem;
       margin:0 8rem;
   }


   p{
       font-weight:600;
       font-size:1.2rem;
       margin-top:1rem;
       margin-left:1rem;
   }
`

export default Calorie