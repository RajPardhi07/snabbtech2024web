import { Route,Routes } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Reset from "../components/Reset"
import Register from "../components/Register"
import Forgot from "../components/Forgot"
import Nav from "../components/Nav"



const Routing = () => {
  return (
      <>
    <div>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/reset" element={<Reset/>}/>
    <Route path="/forgot" element={<Forgot/>}/>


  </Routes>

    </div>
  </>
  )
}

export default Routing