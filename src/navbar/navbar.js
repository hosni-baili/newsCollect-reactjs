import { Link } from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>News Collect</h1>
            <div className="search">
                
            </div>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/allSources">Sources</Link>
                <Link to="/signup">register</Link>
            </div>
        </nav>
    );
}
export default Navbar;
