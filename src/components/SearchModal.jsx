import { useContext } from "react";
import { AppContext } from "../store/Store";
import { IoSearch } from "react-icons/io5";
function SearchModal() {
  const { setIsOpenSearchBar } = useContext(AppContext);

  return (
    <div className="modal-dialog modal-lg mt-5">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-4 d-flex gap-2 align-items-center"
            id="exampleModalLgLabel"
          >
            <span id="searchIconModal">
              <IoSearch size={26} />
            </span>
            <p id="searchIconModalText">Search Product</p>
          </h1>
          <button
            onClick={() => setIsOpenSearchBar(false)}
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <hr />
          <input
            type="search"
            placeholder="search for product,categories or description"
          />
          
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
