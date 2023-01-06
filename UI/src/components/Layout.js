import { Outlet, Link } from "react-router-dom";
import Profile from "./Profile";

const Layout = (props) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
          <li>
            <Link to="/personal">Personal Page</Link>
          </li>
        </ul>
        <Profile onAuth={props.onAuth} />
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
