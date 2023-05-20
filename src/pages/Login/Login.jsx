import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const { signIn, googleLogIn } = useContext(AuthContext)
  const[success, setSuccess] = useState("");
  const[error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const signedInUser = result.user;
        console.log(signedInUser);

        setSuccess("User LoggedIn Successfully!");
        form.reset();
        setError('');
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        if (email !== password) {
          setError('Invalid email or password');
          return;
        }
      });
  };
  const handleGoogleLogIn = () => {
    googleLogIn()
    .then(result => {
        console.log(result.user);
    })
    .catch(error =>  console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full">
        <div className="card w-1/3 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl text-center mt-4 font-bold">
              Please Login!
            </h1>
            <div className="text-center">
              <p className="text-red-500 font-semibold">{error}</p>
              <p className="text-green-500 font-semibold">{success}</p>
            </div>
            <form onSubmit={handleLogin}>
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
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center">
              New to this site? Please
              <Link className="font-bold text-purple-800" to="/register">
                Register
              </Link>
            </p>
            <div className="text-center">
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogIn} className="btn btn-outline"><FaGoogle className="mr-2" /> Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
