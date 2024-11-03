import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

export function Layout() {
    return (
        <>
            {/* Colocar aqui a Navbar */}
            <main>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </main>

        </>
    )
}