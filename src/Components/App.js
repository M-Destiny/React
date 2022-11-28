import {Outlet}  from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function App(){
    return(
        <div>
            <Header />
            <Outlet/>
            <Footer />
        </div>
    )
}