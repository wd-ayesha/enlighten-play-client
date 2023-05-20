import { useEffect, useState } from "react";
import Toy from "./Toy/Toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
    .then((res) => res.json())
    .then((data) => {
      setToys(data)
    });
  }, [])
  
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
         <tbody>
         {
            toys?.map(toy=>(
              <Toy toy={toy} key={toy._id}></Toy>
              ))
          }
         </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default AllToys;
