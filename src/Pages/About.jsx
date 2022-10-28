import React,{useState} from 'react'
import Header from "../Components/Header"
function About() {
  const [Data, setData] = useState([]);
  function changeSearchData (searchDatas){
    setData(searchDatas)
  }
  return (
    <div>
        <Header changeSearchData={changeSearchData}/>

    </div>
  )
}

export default About