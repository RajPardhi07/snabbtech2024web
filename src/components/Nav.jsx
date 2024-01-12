import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">


            <Link className="lenk" to="/">Home</Link>
            <Link className="lenk" to="/Register">Register</Link>
            <Link className="lenk" to="/Login">Login</Link>
            <Link className="lenk" to="/Forgot">Forgot</Link>
            <Link className="lenk" to="/Reset">Reset</Link>
</div>)
}

export default Nav