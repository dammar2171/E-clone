import TopHeader from "../components/TopHeader";
import MainHeader from "../components/MainHeader";
import Container from "../components/Container";
import SearchModal from "../components/SearchModal";
import { useContext } from "react";
import { AppContext } from "../store/Store";
import FilterBar from "../components/FilterBar";
function Home() {
  const { isOpenSearchBar } = useContext(AppContext);
  return (
    <>
      <TopHeader />
      <MainHeader />
      <FilterBar />
      {isOpenSearchBar === true ? <SearchModal /> : <Container />}
    </>
  );
}

export default Home;
