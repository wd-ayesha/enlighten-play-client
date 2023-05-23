import { FaCheck } from "react-icons/fa";
import "./Features.css";

const Features = () => {
  return (
    <div className="featureBg">
      <h2 className="text-center text-purple-950 text-4xl pt-10">Features</h2>
      <div className="hero min-h-screen">
        <div className="hero-content">
          <img
            src="https://i.ibb.co/CWXv7GZ/kid.png"
            className="w-full" alt="kid"
          />
          <div>
            <h1 className="text-5xl font-bold mb-5">
              Beautiful Learning Toys for Children!
            </h1>
            <ul className="mb-5">
              <li className="text-xl flex items-center">
              <FaCheck />
                <span className="ml-2">Amazing & wel-Designed</span>
              </li>
              <li className="text-xl flex items-center">
              <FaCheck />
                <span className="ml-2">Reusable Materials</span>
              </li>
              <li className="text-xl flex items-center">
              <FaCheck />
                <span className="ml-2">Durable & Non-Toxic</span>
              </li>
            </ul>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
