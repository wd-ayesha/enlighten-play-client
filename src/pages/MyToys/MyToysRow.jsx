import { Link } from "react-router-dom";

const MyToysRow = ({ myToy, handleDelete }) => {
  const {
    _id,
    photo,
    toyName,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = myToy;

  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="w-28 rounded">
            {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <th>
        <Link to={`/updateToy/${_id}`}>
          <button className="btn btn-secondary btn-xs">Update</button>
        </Link>
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-secondary btn-xs"
        >
          DElete
        </button>
      </th>
      <td>{description}</td>
    </tr>
  );
};

export default MyToysRow;
