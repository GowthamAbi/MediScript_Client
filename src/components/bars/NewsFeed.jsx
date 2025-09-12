import React, { useState, useEffect } from "react";

const NewsFeed = () => {
  const images = [
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1019/600/300",
    "https://picsum.photos/id/1020/600/300"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length); // loop back
    }, 3000); // change every 3 sec

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=" h-[800px] overflow-hidden relative rounded-lg shadow-lg">
      <img
        src={images[index]}
        alt="slideshow"
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (<div key={i} className={`w-3 h-3 rounded-full ${ i === index ? "bg-white" : "bg-gray-400"}`}></div>))}
      </div>
    </div>
  );
};

export default NewsFeed ;
