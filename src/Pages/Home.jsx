import React,{useState} from 'react'
import BookShelf from '../Components/BookShelf'
import Header from "../Components/Header"
function Home() {
  
  const [Data, setData] = useState([]);
  function changeSearchData (searchDatas){
    setData(searchDatas)
  }
  return (
    <div>
        <Header changeSearchData={changeSearchData}/>
        <BookShelf Data={Data}/>
    </div>
  )
}

export default Home