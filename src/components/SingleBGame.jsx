import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const SingleBGame = ({allBoardGames}) => {
    const params = useParams()
    const id = params.id*1 

    const singleBGame = allBoardGames.find((bGame) => {
        return bGame.id === id
    })

    if (!singleBGame){
        return null
    }
    return(
        <div className="snglebrd">

            <h1>{singleBGame.name}</h1>
            <img className="brdpic" src={singleBGame.img}/>
           
            <h2>Players: {singleBGame.players}</h2>
            <h2>Age: {singleBGame.age}</h2> 
             <h3>Price: {singleBGame.price}</h3>
            <h3>Duration: {singleBGame.playingtime}</h3>
            <Link to='/'>Back to Home</Link>   
        </div>
    )
}

export default SingleBGame