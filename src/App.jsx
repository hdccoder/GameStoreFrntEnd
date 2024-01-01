import { useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import Homepage from './components/Homepage'
import AllVGames from './components/VideoGames'
import SingleVGame from './components/SingleVGame'
import NavBar from './components/Navbar'

import './App.css'

function App() {
  const [allVideoGames, setAllVideoGames] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const {data} = await axios.get('http://localhost:3089/api/videogames')
      console.log(data)
      setAllVideoGames(data)
    }
    fetchVideos()
  },[])

  const deleteVid = async (vidGamez) => {
  try {
    await axios.delete(`http://localhost:3089/api/videogames/${vidGamez.id}`)
    const newVGames = allVideoGames.filter((vidGame) => {
      return vidGame.id !== vidGamez.id 
    })
    setAllVideoGames(newVGames)
  } catch (error) {
    
  }
  }

  return (
   
    <div>
     <NavBar/>
    <Routes>
      <Route path='/' element={<Homepage allVideoGames={allVideoGames}/>}/>
      <Route path='/videogames' element={<AllVGames allVideoGames={allVideoGames}/>}/>
      <Route path='/videogames/:id' element={<SingleVGame allVideoGames={allVideoGames}/>}/>
    </Routes>
      </div>
  )
}

export default App
