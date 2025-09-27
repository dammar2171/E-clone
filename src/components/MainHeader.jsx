import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import "../css/MegaMenu.css";
import { FaRegUser } from "react-icons/fa";

import CartOffCanvas from "./CartOffCanvas";
function MainHeader() {
  return (
    <div className="container-fluid bg-black py-3 mainHeaderBorder">
      <div className="row align-items-center">
        <div className="col-2 d-flex justify-content-start">
          <button className="btn btn-link text-white ps-2">
            <IoSearch size={22} />
          </button>
        </div>
        <div className="col-7">
          <nav className="navbar navbar-expand-lg navbar-dark bg-black p-0">
            <div className="collapse navbar-collapse show" id="mainNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown mega-dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="kitsMenu"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    KITS
                  </a>

                  <div
                    className="dropdown-menu mega-menu p-4"
                    aria-labelledby="kitsMenu"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3">
                          <Link to={"/"} className="dropdown-item">
                            All E-Cigarette Kits
                          </Link>
                          <a className="dropdown-item" href="#">
                            Vape Mods
                          </a>
                          <a className="dropdown-item" href="#">
                            Coils
                          </a>
                        </div>
                        <div className="col-md-3">
                          <a className="dropdown-item" href="#">
                            All in One Kit AIO
                          </a>
                          <a className="dropdown-item" href="#">
                            NEW Vape Kits
                          </a>
                          <a className="dropdown-item" href="#">
                            Tanks
                          </a>
                        </div>
                        <div className="col-md-3">
                          <a className="dropdown-item" href="#">
                            All Vape Kits
                          </a>
                          <a className="dropdown-item" href="#">
                            NEW E-Cigarette Kits
                          </a>
                        </div>
                        <div className="col-md-3">
                          <a className="dropdown-item" href="#">
                            Vape Kits (Built in Battery)
                          </a>
                          <a className="dropdown-item" href="#">
                            New Vape Items
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    E-LIQUIDS & NIC SALTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    DISPOSABLE VAPE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PODS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    COIL AND TANKS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    NICOTINE POUCH
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-3">
          <div className="d-flex justify-content-end mainHeader-icon">
            <a href="#">
              <FaRegUser />
            </a>
            <CartOffCanvas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
