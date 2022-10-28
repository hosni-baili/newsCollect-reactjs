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
                    to="category/politique"
                  >
                    Politique
                  </NavLink>
                  <NavLink
                    to="category/sport"
                  >
                    Sport
                  </NavLink>
                  <NavLink
                    to="category/economie"
                  >
                    Economie
                  </NavLink>
                  <NavLink
                    to="category/culture"

                  >
                    Culture
                  </NavLink>
                  <NavLink
                    to="category/hitech et sciences"
                  >
                    Hi-Tech & Sciences
                  </NavLink>
                  <NavLink
                    to="category/tunisie"
                  >
                    Tunisie
                  </NavLink>
                  <NavLink
                  to="category/internationale"
                  >
                    Internationale
                  </NavLink>
                  <NavLink
                    to="category/divers"

                  >
                    Divers
                  </NavLink>
              {/* <Link to="/category/politique"><FontAwesomeIcon icon={faHome} className="mr-2" />Politique</Link>
                  <Nav.Item className="inactive">
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Politique
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="active">
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Sport
                  </Nav.Link>
                </Nav.Item> */}
            </Nav>

        </div>
     );
}
 
export default RightSidebar;