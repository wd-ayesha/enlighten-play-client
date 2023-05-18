import './Banner.css'
const Banner = () => {
  return (
    <div>
      <div
        className="hero heroBg min-h-screen"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to</h1>
            <p className="mb-5">
            Discover the Joy of Learning with EnlightenPlay&apos;s Educational and Learning Toys!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
