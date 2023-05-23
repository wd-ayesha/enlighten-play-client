import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const [detail, setDetail] = useState([]);

  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://enlighten-play-server.vercel.app/allToys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  }, [id]);

  return (
    <>
      <h2 className="text-4xl pb-10 text-center">Toy Detail</h2>
      <div className="hero min-h-screen bg-base-200 py-10">
        <div className="hero-content">
          <img src={detail.photo} className="w-1/2 rounded-lg shadow-2xl" />
          <div className="pl-16">
            <p className="font-semibold"> Seller Name: {user?.displayName}</p>
            <p className="font-semibold"> Seller Email: {user?.email}</p>
            <p className=" font-semibold">Toy Name: {detail.toyName}</p>
            <p className="">
              Price:
              {detail.price}
            </p>
            <p className="">
              Available Quantity:
              {detail.availableQuantity}
            </p>
            <p className="">
              Detail Description:
              {detail.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
