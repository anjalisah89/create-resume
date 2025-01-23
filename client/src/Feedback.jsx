import React from 'react'
import { Accordion } from 'flowbite-react';

const Footer = () => {
  return (
 <div class=" bg-slate-50 dark:bg-gradient-to-r from-slate-900 to-slate-700">
  <div class="container px-32 py-20 pt-8 mx-auto max-w-screen-lg">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-5 text-gray-900 dark:text-white">FAQs about CreateResume</h1>
      </div>

    <Accordion class="bg-blue-100 dark:bg-gray-900 rounded-xl">
      <Accordion.Panel>
        <Accordion.Title class= "flex items-center justify-between w-full py-5 px-5 font-medium text-left text-gray-500 border-b border-gray-700 dark:border-gray-700" id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
          What is CreateResume?
        </Accordion.Title>
        
        <Accordion.Content>
          <p className="text-gray-500 dark:text-white">
            Anyone can use CreateResume to create an elegant and professional resume, since our resume builder is easy-to-use with a clean user interface readable layout.
          </p>
          <p className="text-gray-500  dark:text-white">
              You can download a resume in PDF for free and have better chances of landing an interview.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title class="flex items-center justify-between w-full py-5 px-5 font-medium text-left text-gray-500 border-b border-gray-700 dark:border-gray-700" id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
        Is CreateResume free?
        </Accordion.Title>
        <Accordion.Content>
            <p>
            <p className="text-gray-500  dark:text-white">
            Yes, it is FREE! CreateResume adopts “Freemium” pricing. After signing up, you can make a resume/CV with 50+ resume template snippets and download it as a PDF for free. If you would like to make multiple resumes with more templates & features, you can upgrade to a paid plan.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title class="flex items-center justify-between w-full py-5 px-5 font-medium text-left text-gray-500 border-b border-gray-700 dark:border-gray-700" id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
        Are there privacy settings for my CreateResume?
        </Accordion.Title>
        <Accordion.Content>
          <p className="text-gray-500 dark:text-white">
            <p>
            Users can fully control the privacy settings of their resumes. There are choices such as “Public”, “Private”, “Only Available for Paid Companies”.  
            </p>
          </p>
          <p className=" text-gray-500 dark:text-white">
            <p>
            For more information,  please read  “How to Change Resume Privacy Settings?”.
            </p>
          </p>
         
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title class="flex items-center justify-between w-full py-5 px-5 font-medium text-left text-gray-500 border-b border-gray-700 dark:border-gray-700" id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
        Can I download my resume PDF for free?
        </Accordion.Title>
        <Accordion.Content>
          <p className="text-gray-500 dark:text-white">
            <p>
            Yes! You can download your resume as a PDF for free anytime. CreateResume does not require payment or credit card information after you finish making your resume.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title class="flex items-center justify-between w-full py-5 px-5 font-medium text-left text-gray-500 dark:border-gray-700" id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
        How many resume templates does CreateResume provide?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-white">
            <p>
            CreateResume provides more than 50 resume template snippets for various multimedia elements, including texts, images, slides, videos, references, etc. By simply dragging and dropping these templates, you can build an one of a kind resume.
            </p>
          </p>
          <p className="text-gray-500 dark:text-white">
            <p>
            Besides, CreateResume also offers 12 premade resume templates with 5 color themes. These themes are specially designed to demonstrate unique personal styles. With these resume templates, you can build a highly-personalized resume in a fast and easy way!
            </p>
            </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
  </div>
  
  )
}

export default Footer