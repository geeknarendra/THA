import React from 'react'
import styled from 'styled-components'

function EvenLayer() {
    return (
        <Container>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Container>
    )
}

const Container=styled.div`
width:100%;
height:12.5%;

display:flex;
 div{
     width:12.5%;
     height:100%;
     
 }

 div:nth-child(even){
    background-color:white;
 }
 
 div:nth-child(odd){
    background-color:black;
 }

`

export default EvenLayer
