import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <img
        className="mx-auto"
        src="https://i.ibb.co/3TG5ChG/error.png"
        alt=""
      />
      <Link to="/">
        <button className="btn btn-active btn-link">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
