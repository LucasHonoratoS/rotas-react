import { Link } from "react-router-dom";

function Header() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
        </ul>
    )
}

export default Header;