import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const SingleVGame = ({allVideoGames}) => {
    const params = useParams()
    const id = params.id*1 

    const singleVGame = allVideoGames.find((vidGame) => {
        return vidGame.id === id
    })

    if (!singleVGame){
        return null
    }
    return(
        <div className="snglgm">

            <h1>{singleVGame.name} {singleVGame.year}</h1>
            <img className="vidpic" src={singleVGame.img}/>
            <h3>Brought to you by {singleVGame.publisher}</h3>
            <h2>Platform: {singleVGame.platform}</h2>
            <h2>Rating: {singleVGame.rating}</h2>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default SingleVGame
