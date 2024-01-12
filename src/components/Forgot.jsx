import { Link } from 'react-router-dom'
import "../style/forget.css"
import { GoNorthStar } from "react-icons/go";

const Forgot = () => {
  return (
    <>
      <div className="mainforget">
        <div className="leftforget">
          <h1>Welcome to PANDA</h1>

        </div>
        <div className="rightforget">

          <div className="forgettop">
            <Link className="forgetlink" to="/register">Join PANDA</Link>
            <h4>or</h4>
            <Link className="forgetlink" to="/Login">Sign In</Link>

          </div>

          <div className="forgetinfo">
          <h2><GoNorthStar /></h2>
            <div className="forgettext">
              <h1>Forgot Password</h1>

            </div>
            <form>
              <input type="text" placeholder="Email" />

            </form>
            <h4>
              Please enter your login email address to receive <br />your reset link.
            </h4>


          </div>

                    <button className="joinpanda">
            Join PANDA
          </button>
          <div className="forgetlast">

          </div>

        </div>
      </div>
    </>
    )
}

export default Forgot