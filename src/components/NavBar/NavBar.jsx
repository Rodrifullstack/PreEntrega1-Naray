import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand navbar bg-body-tertiary fixed-top"  data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" color="#68e1fd" href="#" ><h3 className="customTitle">Shopifast</h3></a>
                <div className="collapse navbar-collapse ">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Ofertas</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link active" aria-current="page" href="#">Sucursales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Contactanos</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <CartWidget/>
                    </span>    
                </div>
            </div>
        </nav>
        
    )
}


export default NavBar