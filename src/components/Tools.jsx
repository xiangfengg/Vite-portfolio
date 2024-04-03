import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const comments = ['First comment', 'Second comment'];

  const nextComment = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 rounded-lg shadow-lg relative">
      <h2 className="text-lg font-semibold mb-4">Carousel</h2>
      <p className="text-gray-800">{comments[currentIndex]}</p>
      <button
        onClick={nextComment}
        className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline transform scale-x-1"
      >
        <span className="block">&#x279c;</span>
      </button>
    </div>
  );
};

export default Carousel;
