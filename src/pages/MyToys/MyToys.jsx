import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";


const MyToys = () => {
    const {user} =useContext(AuthContext);
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:5000/allSelectedToys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    }, [url]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allSelectedToys/${id}`,{
                    method: 'DELETE'
                })
    
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    setMyToys(remaining);
                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success')
                    
                }
            })
        }
        })
    }

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
            myToys.map(myToy => <MyToysRow key={myToy._id} myToy= {myToy} handleDelete={handleDelete}></MyToysRow>)
        }
    </tbody>
  
    
  </table>
</div>
    );
};

export default MyToys;