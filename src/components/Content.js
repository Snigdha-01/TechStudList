import Typed from 'react-typed';
export const Content = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-yellow-400">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none ">
                    <div className='text-teal-600 animate-pulse'>
                  <Typed
                    strings={[' Welcome to SkillMatch']}

                    typeSpeed={40}
                />
                </div>
              </h2>
              <p className="text-base md:text-lg">
              A platform designed to help college students find and connect with other students
               who share their passion for technology. We understand how important it is for students
                to find like-minded individuals who can help them learn, grow, and achieve their goals.
                We understand the challenges that college students face, and we're committed to providing a platform
                 that can help them overcome those challenges and achieve their goals.
                 Whether you`re interested in web development, mobile app development, data science, or any other
                  tech-related field, you can easily find and connect with students who have the skills and experience
                   you're looking for.
If you're a college student looking to connect with other tech enthusiasts, SKILLMATCH is the perfect platform for you.
              </p>
            </div>
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtip2b33EySjkVoxr5WDXsBIxlkn70hjl26b3soP4gEYWgxTC0sTBbYkdGIIkAWLJo614&usqp=CAU"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://www.ellucian.com/sites/default/files/styles/responsive_4_3_l/public/uploads/images/2023/01/blog-image-gone-digital-community-colleges-biggest-opportunities-lie-in-tech.jpg?h=3af4c7d1&itok=qwcs43ca"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://attachment.eab.com/wp-content/uploads/2019/12/Image-Web-Meeting-laptops-tech-550x550.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      
    );
  };