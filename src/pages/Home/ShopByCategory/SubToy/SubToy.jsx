

const SubToy = ({SubToy}) => {
    const { toyName, picture, subCategory, price, 
        availableQuantity } = SubToy || {};

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={picture}
                  alt="img"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <p>{subCategory}</p>
                <p>{price}</p>
                <p>{availableQuantity}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
    );
};

export default SubToy;