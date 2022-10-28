import React, { useState } from "react";
import styled from "styled-components";
import BookDetails from "./BookDetails";
function BookShelf({ Data }) {
  console.log(Data);
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  return (
    <Container>
      {Data.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              <Card
                onClick={() => {
                  setShow(!show);
                  setItem(item);
                }}
              >
                <img src={thumbnail} />
                <div>
                  <h3>{item.volumeInfo.title}</h3>
                  <p>{amount}원</p>
                </div>
                {show === true ? <BookDetails item={bookItem}  onClose={() => setShow(false)} /> : null}
              </Card>
            </>
          );
        }
      })}
    </Container>
  );
}

const Container = styled.section`
  margin: 0 auto;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-gap: 20px;
  box-sizing: border-box;
`;
const Card = styled.div`
  border-radius: 1rem;
  padding: 0.5rem;
  margin-bottom: 10px;
  position: relative;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    border-radius: 1rem 1rem 0 0;
  }
  &:hover {
    transform: scale(0.9);
    transition: all ease 0.5s;
    cursor: pointer;
  }
`;

export default BookShelf;