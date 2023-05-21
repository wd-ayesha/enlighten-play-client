import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const {user} =useContext(AuthContext);
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:5000/allSelectedToys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    }, [])

    return (
<div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Image</th>
        <th>name</th>
        <th>Subcategory</th>
        <th>price</th>
        <th>Quantity</th>
        {/* <th>Ratings</th> */}
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            myToys.map(myToy => <MyToysRow key={myToy._id} myToy= {myToy}></MyToysRow>)
        }
    </tbody>
  
    
  </table>
</div>
    );
};

export default MyToys;