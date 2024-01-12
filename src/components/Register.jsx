import { Link } from "react-router-dom"
import "../style/register.css"
import { GoNorthStar } from "react-icons/go";


const register = () => {
  return (

    <>
    <div className="mainregister">
        <div className="leftregister">
            <h1>Welcome to PANDA</h1>

        </div>
        <div className="rightregister">

            <div className="registertop">
            <Link className="registerlink" to="/register">Join PANDA</Link> 
            <h4>or</h4>
            <Link className="registerlink" to="/Login">Sign In</Link> 

            </div>

            <div className="registerinfo">
            <h2><GoNorthStar /></h2>
                <div className="registertext">
                    <h1>Create your free account</h1>

                    <h3>Takes less than <span>5 minutes</span>...</h3>
                </div>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                </form>

            </div>
            <div className="registerselect">
                <div className=" form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Im an Expert</label>
                </div>

                <div className=" form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Im an Organization in Africa</label>
                </div>

            </div>
            <button className="joinpandaregister">
                Join PANDA
            </button>
            <div className="registerlast">

                <h5>By clicking on Create an account , you agree to our <br /> term of use and privacy policy</h5>
            </div>

        </div>
    </div>
</>
  )
}

export default register