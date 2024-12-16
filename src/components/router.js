import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./hero"
import Men from "./mens"
import Layout from "./layout"
import Women from "./women"
import Jewelery from "./Jewelery"
import Electronics from "./Electronics"
import Sigin from "./sigin"
import Productdata from "./productdata"
import { useState } from "react"
import Header from "./header"
import Cart from "./cart"



function Router1(){
    const [cartItems,setCartItems]=useState([])
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/header" element={<Header cartItems={cartItems} />} />
                    <Route index element={<Hero/>}/>
                    <Route path="/men" element={<Men/>} />
                    <Route path="/women" element={<Women/>}/>
                    <Route path="/Jewelery" element={<Jewelery/>} />
                    <Route path="/Electronics"  element={<Electronics/>}/>
                    <Route path="/sigin" element={<Sigin/>} />
                    
                    <Route path="/cart" element={<Cart/>} cartItems={cartItems} setCartItems={setCartItems}  />
                    <Route path="/product" element={<Productdata cartItems={cartItems} setCartItems={setCartItems} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router1