import { IoIosArrowBack } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import "../css/Checkout.css";
import { useNavigate } from "react-router-dom";

function DeliveryForm() {
  const navigate = useNavigate();
  const onhandleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="form-container py-4">
      <button onClick={onhandleGoBack}>
        <IoIosArrowBack /> Go Back
      </button>
      <form>
        <div className="form-inside">
          <span>Delivery</span>
          <div className="mb-3">
            <select className="w-100 rounded py-2" name="country" required>
              <option value="UnitedArabEmirate">United Arab Emirate</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Reciever Full Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email for order update "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Appartment,suite,etc (optional)"
            />
          </div>
          <div className="mb-3">
            <select className="w-100 rounded py-2" name="city" required>
              <option value="dubai">Dubai</option>
              <option value="abuDhabi">Abu Dhabi</option>
              <option value="ajman">Ajman</option>
              <option value="sarjha">Sarjhan</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              required
              placeholder="Phone number for order and delivery update (10 digit) "
            />
          </div>
        </div>
        <div className="bottom-container py-3">
          <span id="payment">Payment</span>
          <div className="row">
            <div className="col-12 mt-2 mb-2">
              <span className="cod d-flex gap-2">
                <FaCirclePlus />
                Cash on Delivery (COD)
              </span>
            </div>
            <div className="col-12  codDetail">
              <span className=" codDetailText">
                Cash on Delivery (COD) is the only available Payment for now.
              </span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="custom-completeBtn w-100 bg-black text-white rounded pt-1 pb-1 fs-5 fw-bold mt-4"
        >
          Complete Order
        </button>
      </form>
    </div>
  );
}

export default DeliveryForm;
