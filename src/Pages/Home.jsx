import React from 'react'
import BookShelf from '../Components/BookShelf'
import Header from "../Components/Header"
function Home() {
  const [data, setData] = useState();
  return (
    <div>
        <Header/>
        <BookShelf setData={setData}/>
    </div>
  )
}

export default Home