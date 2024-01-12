import { Route,Routes } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Reset from "../components/Reset"
import Register from "../components/register"
import Forgot from "../components/Forgot"
import Nav from "../components/Nav"



const Routing = () => {
  return (
      <>
    <div>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Reset" element={<Reset/>}/>
    <Route path="/forgot" element={<Forgot/>}/>




    {/* <Route path="/Filter" element={<Filter/>}/> */}

  </Routes>

    </div>
  </>
  )
}

export default Routing