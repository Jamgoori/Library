import React from 'react'
import styled from "styled-components";
const BookDetails = ({item,onClose}) => {
       let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
    <Overlay>
        <OverlayInner>
    <Close onClick={onClose}>닫기</Close>
    <Innerbox>
    <img src={thumbnail}/>
    <div className='info'>
        <h1>{item.volumeInfo.title}</h1><br/>
        <div>{item.volumeInfo.authors}</div><br/>
        <p>{item.volumeInfo.publisher} <span> {item.volumeInfo.publishedDate}</span></p><br/>
    <a href={item.volumeInfo.previewLink} target='_blank' rel='noreferrer'><button>더보기</button></a>
    </div>
   
    </Innerbox>
    <Description>{item.volumeInfo.description}</Description>
    </OverlayInner>
    </Overlay>
    </>
  )
}

const Overlay = styled.section`
    min-height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1));
    display: flex;
    align-items: center;
    justify-content: center;
`
const OverlayInner= styled.div`
    background-color: white;
    width: 700px;
    height: 700px;
    padding: 1.5rem;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 1.3rem;
`
const Close = styled.button`

        position: absolute;
        top:1rem;
        right: 1rem;
        outline: none;
        border: none;
        font-size: 17px;
        background-color: transparent;
        cursor: pointer;

`
const Innerbox = styled.div`
    margin-top: 30px;
    display: flex;
    height: 200px;
    img{
        margin-right: 20px;
        width: 180px;
        height: 180px;
    }
    button{
        outline: none;
        border: none;
        width: 100px;
        border-radius: 5px;
        background-color: #24a0ed;
        color: white;
        font-weight: bold;
        padding: 0.3rem 0.5rem;
        cursor: pointer;

    }
`
const Description = styled.h4`
    margin-top: 5rem;
    text-align: justify;
    font-size: 13px;

`

export default BookDetails