import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';


const Toy = ({ toy }) => {
    const { _id, photo, toyName, subCategory, price, 
      availableQuantity } = toy || {};
    const { user } = useContext(AuthContext);
  
    return (
            <>
            <tr>
                <td className="font-bold">{user?.displayName}</td>
                <td className="font-bold">{user?.email}</td>
                <td className="w-20">
                  <img src={photo} alt="" />
                </td>
              <td>{toyName}</td>
              <td>{subCategory}</td>
              <td>{price}</td>
              <td>{availableQuantity}</td>
              <th>
                <Link to={`/toyDetail/${_id}`}>
                <button htmlFor="my-modal-3" className="btn btn-ghost btn-xs">View details</button>
                </Link>
               
              </th>
            </tr>

            </>
    );
};

export default Toy;