import {Link} from "react-router-dom"



const Homepage = ({allVideoGames, allBoardGames}) => {
    return(

        <div className="hmpg">
        <div class='header'>
        <h1>Top {allVideoGames.length}   <Link to='/videogames'>Videogames</Link> & Top {allBoardGames.length}    <Link to='/boardgames'>Boardgames</Link> of 2023 </h1>
        </div>
        <div className="column">
            
        <div className="left">
        <ul>
             {

            allVideoGames.map((vidGame) => {
            return(
                <Link key={vidGame.id} to={`/videogames/${vidGame.id}`}>
                    <li >{vidGame.name}</li>
                </Link>
                
         )
        })
      }
      </ul>
      </div>
      <div className="right">
      <ul>
             {

            allBoardGames.map((bGame) => {
            return(
                <Link key={bGame.id} to={`/boardgames/${bGame.id}`}>
                    <li >{bGame.name}</li>
                </Link>
         )
        })
      }
      </ul>
      </div>

        </div>
        </div>
    )
}

export default Homepage