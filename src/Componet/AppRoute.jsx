import { Route,Routes } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Cart from "../Pages/Cart"
import Product from "../Pages/Product"
import Contact from "../Pages/Contact"
export default function AppRoute(){
    return(
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/About' element={<About></About>}></Route>
            <Route path='/Contact' element={<Contact></Contact>}></Route>
            <Route path='/Product' element={<Product></Product>}></Route>
            <Route path='/Cart' element={<Cart></Cart>}></Route>
        
        </Routes>
    )
}