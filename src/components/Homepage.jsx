import {Link} from "react-router-dom"


const Homepage = ({allVideoGames, allBoardGames}) => {
    return(

        <div className="hmpg">
        <h1>Top {allVideoGames.length}   <Link to='/videogames'>Videogames</Link> & Top {allBoardGames.length}    <Link to='/boardgames'>Boardgames</Link> of 2023 </h1>
        </div>
    )
}

export default Homepage