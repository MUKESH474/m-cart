import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./hero"
import Men from "./mens"
import Layout from "./layout"
import Women from "./women"
import Jewelery from "./Jewelery"
import Electronics from "./Electronics"
import Sigin from "./sigin"

function Router1(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Hero/>}/>
                    <Route path="/men" element={<Men/>} />
                    <Route path="/women" element={<Women/>}/>
                    <Route path="/Jewelery" element={<Jewelery/>} />
                    <Route path="/Electronics"  element={<Electronics/>}/>
                    <Route path="/sigin" element={<Sigin/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router1