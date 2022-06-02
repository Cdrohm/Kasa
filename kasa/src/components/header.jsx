import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <nav className="nav">
                <Link to="/">
                    Accueil
                </Link>
                <Link to="/about" className="Link">
                    A Propos
                </Link>
            </nav>
        </div>
    );
}

export default Header;