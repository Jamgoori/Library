import React from 'react'
import Navbar from './Navbar'
import styled from "styled-components";
import Search from './Search';

function Header() {
  return (
    <div>
        <header>
            <Navbar/>
            <Main>
                <h2> 책을 찾아보세요</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam nam placeat inventore libero necessitatibus voluptatem consequuntur asperiores, odio eius, optio sed harum, provident minus accusamus tempore dolore laboriosam unde illum.</p>
                <Search/>
            </Main>
        </header>
    </div>
  )
}
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-height: 75vh;
    background: url("../images/mainImg.jpg") center/cover no-repeat;

    color: white;
    h2{
        font-size: 4rem;
    }
    p{
        margin-top: 2rem;
    }
`
export default Header