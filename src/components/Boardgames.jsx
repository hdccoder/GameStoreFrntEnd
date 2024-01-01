import { Link } from "react-router-dom"

const AllBoardG = ({allBoardGames}) => {
    return (
        <div>
            <h1>Best Boardgames of 2023</h1>
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
    )
}

export default AllBoardG