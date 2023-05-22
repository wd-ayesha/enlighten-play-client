/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ToyDetails = ({ toy }) => {
  const { _id, toyName, photo, subCategory, price, availableQuantity } = toy || {};
  const { user } = useContext(AuthContext);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={"/images/stock/photo-1635805737707-575885ab0820.jpg"}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{toyName}</h1>
          <p className="font-bold">{user?.displayName}</p>
                <p className="font-bold">{user?.email}</p>
          <p className="py-6">
            { subCategory}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
