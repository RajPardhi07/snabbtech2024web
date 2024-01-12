import { Link } from "react-router-dom"
import { GoNorthStar } from "react-icons/go";

Link
const Login = () => {
    return (
        <>
            <div className="mainlogin">
                <div className="leftlogin">
                    <h1>Welcome to PANDA</h1>

                </div>
                <div className="rightlogin">

                    <div className="logintop">
                    <Link className="loginlink" to="/register">Join PANDA</Link> 
                    <h4>or</h4>
                    <Link className="loginlinkbot" to="/Login">Sign In</Link> 

                    </div>

                    <div className="logininfo">
                    <h2><GoNorthStar /></h2>
                        <div className="logintext">
                            <h1>Sign in</h1>

                        </div>
                        <form>
                            <input type="text" placeholder="Email" />
                            <input type="password" placeholder="Password" />

                        </form>

                    </div>
                   
                    <button className="joinpandalogin">
                        Sign in
                    </button>
                    

                </div>
            </div>
        </>
    )
}

export default Login