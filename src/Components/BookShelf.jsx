import React,{useState} from 'react'
import styled from "styled-components";
function BookShelf() {
  return (
    <Container>
    <Card>
      <img src='./images/sorry.jpg'/>
      <div>
        <h3>안녕하시롱</h3>
        <p>3500</p>
      </div>
    </Card> 
    </Container>
  )
}

const Container = styled.section`
  margin:0 auto;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4,minmax(200px,1fr));
  grid-gap: 20px;
  box-sizing: border-box;
`
const Card = styled.div`
    border-radius: 1rem;
  padding: 0.5rem;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
  
  img{
    width: 100%;
    height: 200px;
    border-radius: 1rem 1rem 0 0;
  }
`

export default BookShelf