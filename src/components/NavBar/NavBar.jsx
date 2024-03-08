import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <>
        <nav className="navbar navbar-expand navbar bg-body-tertiary fixed-top"  data-bs-theme="dark">
            <div className="container" >
                <div className="collapse navbar-collapse ">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"}><a className="nav-item" color="#68e1fd" href="#" ><h3 className="customTitle">Shopifast</h3></a></Link>
                        </li>   
                        <li className="nav-item">
                           <Link to={"/category/celular"}> <a className="nav-link active" aria-current="page" href="#">Celulares</a> </Link>
                        </li>
                        <li className="nav-item">
                           <Link to={"/category/tablet"}> <a className="nav-link active" aria-current="page" href="#">Tablets</a> </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={"/category/Computadora"}><a className="nav-link active" aria-current="page" href="#">Computadoras</a></Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <CartWidget/>
                    </span>    
                </div>
            </div>
        </nav>
        <br/>
        <br/>
        <br/>
        </>
    )
}


export default NavBar