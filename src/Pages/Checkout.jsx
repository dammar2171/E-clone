import TopHeader from "../components/TopHeader";
import MainHeader from "../components/MainHeader";
import DeliveryForm from "../components/DeliveryForm";
import DeliveryCard from "../components/DeliveryCard";
import "../css/Checkout.css";
import ImptLink from "../components/ImptLink";
function Checkout() {
  return (
    <div className="checkoutBackground">
      <TopHeader />
      <MainHeader />
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <DeliveryForm />
          </div>
          <div className="col-6">
            <DeliveryCard />
            <ImptLink />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
