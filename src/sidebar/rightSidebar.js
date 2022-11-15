import { Link,NavLink } from 'react-router-dom'
import { Nav } from "react-bootstrap"

const RightSidebar = () => {
    return ( 
        <div className="right-sidebar">
            <h2>Category</h2>
            {/* <ul>
            <li><a href="/hello">hello</a></li>
            <li><a href="/hello">hosni</a></li>
            <li><a href="/hello">hello</a></li>
            </ul>
            <li><Link to="/category/politique">Politique</Link></li>
            <li><Link to="/category/economie">Economie</Link></li>
            <li><Link to="/category/sport">Sport</Link></li> */}
            <Nav>
                <NavLink
                    to="category" state={{ cat: "politique" }}
                  >
                    Politique
                  </NavLink>
                  <NavLink
                    to="category" state={{ cat: "sport" }}
                  >
                    Sport
                  </NavLink>
                  <NavLink
                    to="category" state={{ cat: "economie" }}
                  >
                    Economie
                  </NavLink>
                  <NavLink
                    to="category" state={{ cat: "culture" }}

                  >
                    Culture
                  </NavLink>
                  <NavLink
                    to="category" state={{ cat: "hitech et sciences" }} 
                  >
                    Hi-Tech & Sciences
                  </NavLink>
                  <NavLink
                    to="category" state={{ cat: "tunisie" }}
                  >
                    Tunisie
                  </NavLink>
                  <NavLink
                  to="category" state={{ cat: "internationale" }}
                  >
                    Internationale
                  </NavLink>
                  <NavLink
                    to="category" state={{ cat: "divers" }}
                  >
                    Divers
                  </NavLink>
            </Nav>

        </div>
     );
}
 
export default RightSidebar;