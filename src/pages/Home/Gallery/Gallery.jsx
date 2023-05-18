import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/3.jpg";
import img4 from "../../../assets/images/4.jpg";
import img5 from "../../../assets/images/5.jpg";
import img6 from "../../../assets/images/6.jpg";
import img7 from "../../../assets/images/7.jpg";


const Gallery = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-purple-950 text-4xl mb-14">Gallery</h2>
      <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
        <img className="w-40 h-44 rounded-lg border-2" src={img1} alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src={img2} alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src={img3} alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src={img4} alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src={img5} alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src={img6} alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src={img7} alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src={img5} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
