

const Gallery = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-purple-950 text-4xl mb-14">Gallery</h2>
      <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
        <img className="w-40 h-44 rounded-lg border-2" src="https://i.ibb.co/Q8kNXTQ/1.jpg" loading="lazy" alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src="https://i.ibb.co/T2B6Gd6/2.jpg" loading="lazy" alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src="https://i.ibb.co/ftMcjR8/3.jpg" loading="lazy" alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src="https://i.ibb.co/k2RtZb4/4.jpg" loading="lazy" alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src="https://i.ibb.co/CmwTmVD/5.jpg" loading="lazy" alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src="https://i.ibb.co/8YmRn7n/6.jpg" loading="lazy" alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src="https://i.ibb.co/C6zPVDz/7.jpg" loading="lazy" alt="" />
        <img className="w-40 h-44 rounded-lg border-2" src="https://i.ibb.co/vcGQvFG/8.jpg" loading="lazy" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
