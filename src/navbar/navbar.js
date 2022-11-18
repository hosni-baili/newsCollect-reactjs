import { Link } from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="col-md-3"><h1>News Collect</h1></div>
            <div className="links">
                <div className="col-md-3"><Link to="/">home</Link></div>
                
                <div className="col-md-3"><Link to="/allWebSources">Web Sources</Link></div>
                <div className="col-md-3"><Link to="/allRadioSources">Radio Sources</Link></div>
                <div className="col-md-3"><Link to="/allTvSources">TV Sources</Link></div>
                <div className="col-md-3"><Link to="/signup">register</Link></div>
            </div>
        </nav>
    );
}
export default Navbar;
