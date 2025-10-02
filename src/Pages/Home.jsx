import Container from "../components/Container";
import SearchModal from "../components/SearchModal";
import { useContext } from "react";
import { AppContext } from "../store/Store";
import FilterBar from "../components/FilterBar";
import Header from "../components/Header";
function Home() {
  const { isOpenSearchBar } = useContext(AppContext);
  return (
    <>
      <Header />
      <FilterBar />
      {isOpenSearchBar === true ? <SearchModal /> : <Container />}
    </>
  );
}

export default Home;
