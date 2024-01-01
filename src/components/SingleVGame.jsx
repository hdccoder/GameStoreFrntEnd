import { useParams } from "react-router-dom"
import axios from "axios"

const SingleVGame = ({allVideoGames}) => {
    const params = useParams()
    const id = params.id*1 

    const singleVGame = allVideoGames.find((vidGame) => {
        return vidGame.id === id
    })

    if (!SingleVGame){
        return null
    }
    return(
        <div>

            <h1>{singleVGame.name} {singleVGame.year}</h1>
            <img className="vidpic" src={singleVGame.img}/>
            <h3>Brought to you by {singleVGame.publisher}</h3>
            <h2>Platform: {singleVGame.platform}</h2>
            <h2>Rating: {singleVGame.rating}</h2>
        </div>
    )
}

export default SingleVGame