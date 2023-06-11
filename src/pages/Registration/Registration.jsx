import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User Registered Successfully!");
        form.reset();
        setError("");
        updateUserProfile(user, name, photo)
      })
      .catch((error) => {
        console.log(error);
        if (!email || !password) {
          setError("Please enter your email and password");
          return;
        } else if (password.length < 6) {
          setError("Password must be at least 6 characters long");
          return;
        }
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full">
        <div className="card w-1/3 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl text-center mt-4 font-bold">
              Please Register!
            </h1>
            <div className="text-center">
              <p className="text-red-500 font-semibold">{error}</p>
              <p className="text-green-500 font-semibold">{success}</p>
            </div>
            <form onSubmit={handleRegistration}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center">
              Already have an account?Please
              <Link className="font-bold text-purple-800" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
