import { BiSearchAlt2 } from "react-icons/bi";

const Details = ({setSearch, search,sort,setSort }) => {
  const handleSorting = (event) => {
    setSort(event.target.value);
   
  };

    const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="p-4 md:p-8">

      <div className="flex flex-col md:flex-row justify-between md:mt-5 mt-5 ">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="mb-4 md:mb-0 "
        >
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full max-w-xs md:max-w-full"
            style={{ borderBottomRightRadius: "0", borderTopRightRadius: "0" }}
            value={search}
            onChange={handleChange}
          />
          <button
            className="btn  btn-primary"
            style={{
              borderBottomLeftRadius: "0",
              borderTopLeftRadius: "0",
              backgroundColor: "#0D6EFD",
              border: "1px solid white",
            }}
          >
            <BiSearchAlt2 className="text-white text-xl"></BiSearchAlt2>
          </button>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <select value={sort}
            onChange={handleSorting}
            className="select select-bordered w-full max-w-xs md:max-w-full select-helvetica"
          >
            <option selected disabled>
              Sort Users
            </option>
            <option value="1">Sort by name</option>
            <option value="2">Sort by email</option>
            <option value="3">Sort by Company name</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Details;
