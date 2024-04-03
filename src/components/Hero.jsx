import React from 'react';
import myImage from '../assets/GA040223 61.png';

const HeroSection = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 ml-8 lg:mb-0">
          <img
            className="rounded-lg shadow-lg"
            src={myImage}
            alt="Your Name"
            style={{ maxWidth: '300px' }}
          />
        </div>
        <div className="lg:w-1/2 ml-5 ">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Hey there!
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            I am Xiang Feng, a recently graduate with a degree in Data Science and Business Analytics. In addition to my expertise in software development, I have a deep fascination with data and the art of storytelling. I am passionate about extracting meaningful insights from complex datasets and using them to weave compelling narratives.
          </p>
          <a
            href=" mailto:yongxiangfeng13@gmail.com"
            className="bg-yellow-500 hover:bg-gray-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
