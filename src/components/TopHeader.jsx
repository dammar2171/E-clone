import style from "../css/TopHeader.module.css";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
function TopHeader() {
  return (
    <div className="container-fluid bg-black py-2 ">
      <div className="row">
        <div className="col-11">
          <div className={`${style.topHeaderLink} d-flex`}>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">FAQ's</a>
          </div>
        </div>
        <div className="col-1">
          <div className={`${style.socialMedia} d-flex`}>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FiFacebook />
            </a>
            <a href="#">
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
