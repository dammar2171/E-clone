import TopHeader from "./TopHeader";
import MainHeader from "./MainHeader";

function Header() {
  return (
    <div className="sticky-top  custum-header">
      <TopHeader />
      <MainHeader />
    </div>
  );
}

export default Header;
