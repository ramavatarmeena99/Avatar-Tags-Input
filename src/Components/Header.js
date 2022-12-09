import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <Div> 
        <h1 style={{fontSize:"25px"}}>Tags</h1>
    <H1>Input</H1>
    </Div>
  )
}

const Div = styled.div`
width:100%;
height:7vh;
display:flex; 
align-items:center; 
justify-content:center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
background-color: #eaeaea;

`

const H1 = styled.h1`
font-size:25px;
color:red;
padding:5px;
`