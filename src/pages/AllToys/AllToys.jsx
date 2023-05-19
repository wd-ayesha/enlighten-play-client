import { useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  fetch("http://127.0.0.1:5000/")
    .then((res) => res.json())
    .then((data) => setToys(data));
  return (
    <div>
      <h1>All Toys: {toys.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          {
            toys.map(toy=>console.log(toy))
          }
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                    <div className="font-bold"></div>
                </div>
              </td>
              <td>
                
              </td>
              <td></td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
