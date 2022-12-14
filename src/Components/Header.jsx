import React from 'react'
import Navbar from './Navbar'
import styled from "styled-components";
import Search from './Search';

function Header({changeSearchData}) {
  return (
    <div>
        <header>
            <Navbar/>
            <Main>
                <h2> 책을 찾아보세요</h2>

                <Search changeSearchData={changeSearchData}/>
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
        margin-bottom: 6rem;
    }

`
export default Header