import { useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import Homepage from './components/Homepage'
import AllVGames from './components/VideoGames'
import SingleVGame from './components/SingleVGame'
import AllBoardG from './components/Boardgames'
import SingleBGame from './components/SingleBGame'


import './App.css'

function App() {
  const [allVideoGames, setAllVideoGames] = useState([])
  const [allBoardGames, setAllBoardGames] = useState([])
  useEffect(() => {
    const fetchVideos = async () => {
      const {data} = await axios.get('http://localhost:3089/api/videogames')
      console.log(data)
      setAllVideoGames(data)
    }
    fetchVideos()
  },[])

  useEffect(() => {
    const fetchBoards = async () => {
      const {data} = await axios.get('http://localhost:3089/api/boardgames')
      console.log(data)
      setAllBoardGames(data)
    }
    fetchBoards()
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
   
    <Routes>
      <Route path='/' element={<Homepage allVideoGames={allVideoGames} allBoardGames={allBoardGames}/>}/>
      <Route path='/videogames' element={<AllVGames allVideoGames={allVideoGames}/>}/>
      <Route path='/videogames/:id' element={<SingleVGame allVideoGames={allVideoGames}/>}/>
      <Route path='/boardgames' element={<AllBoardG allBoardGames={allBoardGames}/>}/>
      <Route path='/boardgames/:id' element={<SingleBGame allBoardGames={allBoardGames}/>}/>
    </Routes>
      </div>
  )
}

export default App
