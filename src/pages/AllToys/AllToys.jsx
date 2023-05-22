import { useEffect, useState } from "react";
import Toy from "./Toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  return (
    <div>
      <div className="text-center py-10">
        <h2 className="text-4xl pb-10">All Toys</h2>
        <input
          onChange={(event) => setSearchText(event.target.value)}
          type="text"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <button className="btn btn-outline ml-3" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Toy Image</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy) => (
              <Toy toy={toy} key={toy._id}></Toy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
