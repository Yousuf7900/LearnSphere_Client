import { Outlet } from "react-router";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

const Layout = () => {
    return (
        <div>
            <nav className="sticky top-0 z-50">
                <NavBar></NavBar>
            </nav>

            <section>
                <Outlet></Outlet>
            </section>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;