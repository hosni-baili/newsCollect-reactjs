import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <Link className="menu-item" to="/addSource">
        Add new source
      </Link>

      <Link className="menu-item" to="/allSources">
        List of Sources
      </Link>

      <Link className="menu-item" to="/responsive">
        responsive
      </Link>
    </Menu>
  );
};