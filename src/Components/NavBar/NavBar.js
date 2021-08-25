import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink
} from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from '../../Assets/mentalcaptainlogo.jpg';

const NavBar = () => {
  return (
    <>
      <Router>
        
        <nav className={styles.Navigationbar}>
        
          <div className={styles.NavTitle}>            
            <Link to="/"  >
            <img src={logo} alt="logo" />
            </Link>
            <p >MENTAL & PERFORMANCE COACHING </p>
            <br></br>
            <p >FOR NYSTARTEDE MARKETINGSKONSULENTER</p>
          </div>
          <ul>
            <li>
              {" "}
              <Link to="/" className={styles.NavigationbarElements}>
                Forside
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/forloeb" className={styles.NavigationbarElements}>
                Forløb
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/om-mig" className={styles.NavigationbarElements}>
                Om Mig
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/kontakt" className={styles.NavigationbarElements}>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </Router>
    </>
  );
};

export default NavBar;
