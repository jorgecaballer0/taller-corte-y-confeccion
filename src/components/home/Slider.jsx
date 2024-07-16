import { useEffect, useState } from "react";

const SliderComponent = () => {
  const images = [
    "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png",
    "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
    "https://images.pexels.com/photos/1115191/pexels-photo-1115191.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="w-full h-full overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 absolute inset-0 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow left-4 top-1/2"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow right-4 top-1/2"
      >
        &gt;
      </button>
      <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2">
        <button className="px-4 py-2 text-white bg-blue-500 rounded">
          Ir a la sección
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
