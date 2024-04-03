import React from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote: "I am writing this recommendation with great pleasure for Yong Xiang Feng, whom I had the opportunity to instruct during General Assembly's Software Engineering Immersive Flexible course. Over the course of the program, Xiang Feng displayed an uncommon drive and natural ability to grasp complex software engineering concepts that are typically challenging for most students. \n\ Xiang Feng's aptitude for problem-solving was evident throughout the course. His consistent approach towards dissecting problems and articulating clear, concise solutions was impressive. Not only was Xiang Feng quick to understand new concepts, but they also demonstrated the ability to apply them innovatively, often going above and beyond the project requirements. \n\Moreover, Xiang Feng displayed a strong commitment to continuous learning and improvement. They were always eager to receive feedback and demonstrated an impressive capacity to integrate it into their work. This enthusiasm and dedication to their craft will undoubtedly serve them well in their future endeavors.\n\In conclusion, Xiang Feng is an extraordinary student, and I have no doubt that they will be a valuable asset to any organization. Their drive, technical skills, leadership, and eagerness to learn make them an excellent candidate for any software engineering role. I look forward to seeing the great things they will undoubtedly accomplish in their career.",
      author: "Leonard Yeo",
      authorPost: "Senior Software Engineer at XRATOR",
      link: "https://www.linkedin.com/in/leonardyeoxl/",
    },

    {
      quote: "As his mentor, observing Xiang Feng’s progress since he started joining full-stack software engineering program on September 2022, he has made considerable progress in his skills in incorporating modern web programming with the MERN stack.He is open for feedback and continuously tries to fill areas where he finds challenging. This growth mindset will be value-add for any companies.I do hope he has a rewarding career jumpstart ahead.",
      author: "Yudy Hendry",
      authorPost: "Solution Architect at GOOGLE ",
      link: `https://www.linkedin.com/in/yudyhendry/`
    },
    {
      quote: "I had the pleasure of working with Xiang Feng on a full stack project at GA, and he was a great team member who consistently demonstrated a keen interest in developing a deeper understanding of the concepts and problems we encountered. His desire to learn and improve allowed him to grasp complex concepts quickly and apply them to our project.Beyond technical skills, he was an patient communicater and particpated in team discussions, contributing constructively, while faciliting effective collaboration amongst team members. Looking forward to see where his adaptibility will take him!",
      author: "Shenna Mae",
      authorPost: " Assistant Manager at Singapore Green Building Council ",
      link: `h`

    },
    {
      quote: "Having Xiang Feng as my secretary-general during our service for the Singapore Polytechnic Students' Union, I am extremely impressed. \n\Xiang Feng is very detail- oriented and has a keen eye in improving the working environment around him. His dedication in completing the tasks assigned to him has allowed him to achieve great results for the Union.He possesses a great personality which allows him to connect with the people around him easily. His willingness to learn and humbleness kept him grounded and improving consistently.",
      author: "Glendon Thiaw",
      authorPost: " Solutions Architect at Amazon Web Service ",
      link: `h`

    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-full px-4 py-20 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-full mx-auto px-4 sm:flex sm:justify-center sm:pe-6 lg:pe-8">
          <h2 className="tracking-tight text-white sm:text-3xl text-center font-semibold">
            Read what people says about me
          </h2>
        </div>

        <div className="-mx-10 mt-10 lg:col-span-2 lg:mx-0">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-600 rounded-lg p-6 shadow-md mb-4 max-w-[800px] mx-auto">
              <p className="text-yellow-500 font-bold text-lg sm:text-2xl">{testimonial.author}</p>
              {testimonial.quote.split('\n').map((paragraph, i) => (
                <p key={i} className="text-white mt-2">{paragraph}</p>
              ))
              }
              < p className="text-gray-400 mt-4">- <a href={testimonial.link} className="text-grey-200 underline">{testimonial.authorPost}</a></p>
            </div>
          ))}
        </div>
      </div >
    </section >
  );
}

export default TestimonialSlider;
