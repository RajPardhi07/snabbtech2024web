import { Link } from "react-router-dom"
import "../style/reset.css"
import { GoNorthStar } from "react-icons/go";


const Reset = () => {
  return (
<>
      <div className="mainreset">
        <div className="leftreset">
          <h1>Welcome to PANDA</h1>

        </div>
        <div className="rightreset">

          <div className="resettop">
            <Link className="resetlink" to="/register">Join PANDA</Link>
            <h4>or</h4>
            <Link className="resetlink" to="/Login">Sign In</Link>

          </div>

          <div className="resetinfo">
            <h2><GoNorthStar /></h2>
            <div className="resettext">
              <h1>Reset Password</h1>

            </div>
            <form>
              <input type="text" placeholder="Enter New Password" />
              <input type="text" placeholder="Re-Enter New Password" />

            </form>
            


          </div>

                    <button className="joinpanda">
            Reset My Password
          </button>
          

        </div>
      </div>
    </>  )
}

export default Reset