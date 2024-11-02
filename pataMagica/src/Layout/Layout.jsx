import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

export function Layout() {
    return (
        <>
            {/* Colocar aqui a Navbar */}
            <main>
                <Outlet/>
            </main>

            <Footer></Footer>
        </>
        
    )
}