import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
function Search(props) {
  const [realSearch, setRealSearch] = useState("");
  const [Data, setData] = useState([]);
  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            realSearch +
            "&key=AIzaSyAVCG6-qEF5pd-xheLY5hjedP1zjV0axCw"
        )
        .then(
          (res) => console.log(res.data.items),
          (res) => setData(res.data.items)
        )
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <SearchForm>
        <div>
          <input
            type="text"
            placeholder="책 제목을 입력하세요"
            onChange={(e) => setRealSearch(e.target.value)}
            onKeyPress={() => props.setData()}
            value={realSearch}
          />
          <button>
            <FaSearch size={32} onClick={searchBook} />
          </button>
        </div>
      </SearchForm>
    </>
  );
}
const SearchForm = styled.section`
  width: 100%;
  form {
    margin-top: 3rem;
  }
  input {
    width: 500px;
    border-radius: 1rem;
    height: 3rem;
    outline: none;
    border: 0;
    font-size: 2rem;
    text-align: center;
  }
  input::placeholder {
  }
  button {
    color: white;
  }
`;
export default Search;
