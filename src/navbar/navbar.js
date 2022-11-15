import { Link } from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>News Collect</h1>
            <div className="search">
                
            </div>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/allWebSources">Web Sources</Link>
                <Link to="/allRadioSources">Radio Sources</Link>
                <Link to="/allTvSources">TV Sources</Link>
                <Link to="/signup">register</Link>
            </div>
        </nav>
    );
}
export default Navbar;
