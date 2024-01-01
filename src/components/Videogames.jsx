import { Link } from "react-router-dom"

const AllVGames = ({allVideoGames}) => {
    return (
        <div>
            <h1>Best Videogames of 2023</h1>
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
      <div>  <Link to='/'>Back to Home</Link></div>
        </div>
    )
}

export default AllVGames