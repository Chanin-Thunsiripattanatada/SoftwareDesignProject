import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { CategoryProvider } from '../context';
import CategoryDropdown from './Category/CategoryDropdown';
import { toggleCartTabVisibility } from '../stores/CartData';
import UserManageHeader from './User/UserManageHeader';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const cartItems = useSelector(store => store.cart.items);
  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => total += item.quantity);
    setCartQuantity(total);
  }, [cartItems]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenCartTab = () => {
    dispatch(toggleCartTabVisibility());
  }
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${searchTerm}`);
    }
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
          <div className="container-fluid m-1">
            <Link className="navbar-brand" to="/">
              <img src={require('../assets/image/SD_LOGO.png')} width={"75px"} height={"75px"} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
              <img src={require('../assets/image/menu.png')} width={"40px"} height={"40px"} alt="" />
            </button>
            <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" data-bs-scroll="true" data-bs-backdrop="false" aria-labelledby="offcanvasNavbar2Label">
              <div className="offcanvas-header">
                <img src={require('../assets/image/SD_LOGO.png')} width={"75px"} height={"75px"} alt="" />
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
              <form className="d-flex mt-3 mt-lg-0" role="search" onSubmit={handleSearchSubmit}>
                  <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="ค้นหาสินค้า" 
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="btn btn-outline-success" data-bs-dismiss="offcanvas" type="submit">ค้นหา</button>
                </form>
                <br />
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item align-self-center">
                    <Link className="nav-link active" aria-current="page" to="/">หน้าแรก</Link>
                  </li>
                  <CategoryDropdown />
                  <li className="nav-item align-self-center">
                    <Link className="nav-link" to="/บริการ">บริการ</Link>
                  </li>
                  <li className="nav-item align-self-center">
                    <Link className="nav-link" to="/เงื่อนไขการรับประกัน">เงื่อนไขการรับประกัน</Link>
                  </li>
                  <li className="nav-item align-self-center">
                    <Link className="nav-link" to="/เกี่ยวกับเรา">ติดต่อเรา</Link>
                  </li>
                  <li className="nav-item align-self-center">
                    <Link onClick={handleOpenCartTab}>
                      <img src={require('../assets/image/shopping_cart_icon_177373.png')} width={"50px"} height={"50px"} alt="" />
                    </Link>
                    <span>{cartQuantity}</span>
                  </li>
                  <UserManageHeader />
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
