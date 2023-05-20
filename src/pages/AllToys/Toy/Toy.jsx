import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Toy = ({ toy }) => {
    const { toyName, subCategory, price, 
      availableQuantity } = toy || {};
    const { user } = useContext(AuthContext);

    return (
            <tr>
                <td className="font-bold">{user?.displayName}</td>
              <td>{toyName}</td>
              <td>{subCategory}</td>
              <td>{price}</td>
              <td>{availableQuantity}</td>
              <th>
                <button className="btn btn-ghost btn-xs">View details</button>
              </th>
            </tr>
    );
};

export default Toy;