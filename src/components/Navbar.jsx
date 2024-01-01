import { Link } from "react-router-dom"

const NavBar = () => {
return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/videogames'>Videogames</Link>
        <Link to='/boardgames'>Boardgames</Link>
    </nav>
)
}

export default NavBar