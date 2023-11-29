import "./nav.css";

import { Link, Outlet } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav>
        <ul id="navbar">
          <li>
            <Link to="/multiplier">Multiplier</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
          <li>
            <Link to="/helloworld">Hello World</Link>
          </li>
          <li>
            <Link to="/vacation">Vacation</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
