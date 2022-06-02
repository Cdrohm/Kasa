import logo from "../assets/logo.svg";

function Header() {
    return (
        <div className="header">
            <link to="">
                <img src={logo} alt="logo" />
            </link>
            <nav className="nav">
                <link to="">
                    Accueil
                </link>
                <link to="">
                    A Propos
                </link>
            </nav>
        </div>
    );
}

export default Header;