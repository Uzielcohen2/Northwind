import { AuthProvider } from "../../AuthArea/AuthContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header className="layout-header">
                <Header />
            </header>
            <main>
                <AuthProvider>
                    <Routing />
                </AuthProvider>



            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
