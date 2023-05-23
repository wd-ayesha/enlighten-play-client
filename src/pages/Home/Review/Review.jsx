const Review = () => {
  return (
    <>
      <h2 className="text-center text-purple-950 text-4xl my-20">
        What Our Clients Says
      </h2>
    
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl py-8 bg-gradient-to-r from-violet-400 to-fuchsia-400">
          <figure className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
            <img src="https://i.ibb.co/Dt762sb/male-1.jpg" alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">John Doe</h2>
            <p>Excellent service and good quality products.</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
                checked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl py-8 bg-gradient-to-r from-violet-400 to-fuchsia-400">
          <figure className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
            <img
              src="https://i.ibb.co/Yp658HR/female-3-150x150.jpg"
              alt="img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jenna Smith</h2>
            <p>Excellent service and good quality products.</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
                checked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl py-8 bg-gradient-to-r from-violet-400 to-fuchsia-400">
          <figure className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
            <img src="https://i.ibb.co/Pgg7nbf/male-3.jpg" alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Samuel Stevens</h2>
            <p>Excellent service and good quality products.</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
                checked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
