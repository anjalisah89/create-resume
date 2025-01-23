import React from "react";
import hero from "./images/hero.png";

const Section = () => {
  return (
    <section class=" dark:dark_gradient pt-24">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Create an impressive resume in minutes
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-white">
          CreateResume provides a variety of professional templates and formats.
          Build a simple yet unique resume in no time and free to download.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="/"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get Started
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="/"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn more
          </a>
        </div>
      </div>

      <div class="container px-32 mx-auto">
        <div class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={hero}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
                Make a Resume Online – Quick & Easy
              </h1>
              <p class="mb-8 text-gray-900 dark:text-white text-justify leading-relaxed">
                We have developed a resume builder based on feedback from
                thousands of users, recruiter expertise, stellar template design
                and the best hiring practices. The goal is simple: help you land
                that dream job interview! Get an advantage in the modern
                professional environment.Build beautiful, recruiter-tested
                resumes in a few clicks!
              </p>
              <div class="flex justify-center">
                <button class="inline-flex py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  {" "}
                  Create My Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="container px-5 pb-20 mx-auto">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 dark:text-white text-lg title-font font-medium mb-2">
                  Powerful and easy-to-use
                </h2>
                <p class="leading-relaxed dark:text-white text-justify">
                  Created to be suitable for all levels of job seekers. Our host
                  of powerful features ranges from an excellent spell-checker,
                  to job tracking, multi-format export, auto-generated summaries
                  and more.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 dark:text-white text-lg title-font font-medium mb-2">
                  Customization made simple
                </h2>
                <p class="leading-relaxed dark:text-white text-justify">
                  Fine-tune your resume for a specific job with ease. We help
                  you turn a generic document into a cutting-edge instrument
                  that wins interviews. Transform universal resumes into perfect
                  sales pitches with a few key-strokes.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow pl-6 ">
                <h2 class="text-gray-900 dark:text-white text-lg title-font font-medium mb-2">
                  Templates designed by experts
                </h2>
                <p class="leading-relaxed dark:text-white text-justify">
                  Our designed templates and examples are reviewed by
                  recruiters. This gives you a powerful boost in resume creation
                  - the people responsible for hiring and candidate evaluation
                  for your dream job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
