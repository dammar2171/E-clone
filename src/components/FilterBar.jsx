import { CiFilter } from "react-icons/ci";
const FilterBar = () => {
  return (
    <div className="container-fluid pt-4">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <span className="d-flex gap-2 custumFilter">
              <span className="filterIcon d-flex gap-2 justify-content-center align-items-center">
                <CiFilter size={22} /> <p className="mt-3">Filter</p>
              </span>
              <p className="mt-2">1 product</p>
            </span>
          </div>
          <div className="col-6"></div>
          <div className="col-2">
            <select name="filterType" className="filterOption">
              <option value="newToOld">Date, New to Old</option>
              <option value="Featured">Featured</option>
              <option value="bestSelling">Best Selling</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilterBar;
