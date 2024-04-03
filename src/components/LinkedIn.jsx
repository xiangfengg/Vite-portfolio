import { useState } from 'react';

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "No, Rose, they are not breathing...",
      author: "Michael Scott",
      authorPost: "Regional Manager"
    },
    {
      quote: "No, Rose, they are not breathing...",
      author: "Michael Scott",
      authorPost: "Regional Manager"
    },
    {
      quote: "No, Rose, they are not breathing...",
      author: "Michael Scott",
      authorPost: "Regional Manager"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section>
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8 test- bg-transparent">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Read what People feel about me
          </h2>

          {/* <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={prevSlide}
              className="rounded-full border border-yellow-500 p-3 text-yellow-500 transition hover:bg-yellow-500 hover:text-white"
            >
              &lt;
            </button>

            <button
              aria-label="Next slide"
              onClick={nextSlide}
              className="rounded-full border border-yellow-500 p-3 text-yellow-500 transition hover:bg-yellow-500 hover:text-white"
            >
              &gt;
            </button>
          </div> */}
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-transparent p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <p className="text-2xl font-bold text-white sm:text-3xl">{testimonial.author}</p>
                    <p className="mt-4 leading-relaxed text-yellow-500">{testimonial.quote}</p>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-yellow-500 sm:mt-6">&mdash; {testimonial.author}, {testimonial.authorPost}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
