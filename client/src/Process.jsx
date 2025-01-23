import React from 'react'
import gallery1  from './images/gallery1.png';
import gallery2  from './images/gallery2.png';
import gallery3  from './images/gallery3.png';
import gallery4  from './images/gallery4.png';
import gallery5  from './images/gallery5.png';
import gallery6  from './images/gallery6.png';


const Process = () => {
  return (
    <section class="text-gray-600 body-font  ">
  <div class="container px-5 py-10 mx-auto ">
    <div class="flex flex-col text-center w-full mb-12 dark:text-white">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">How to build a resume</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">The resume building process is simple and intuitive: Six easy steps is all it takes to get from start to finish. Resume writing can be time-consuming. So, our resume tools and guides are designed to save as much of your time as possible</p>
    </div>

    <div class="container px-32 py-10 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-xl " src={gallery1} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 class="tracking-widest title-font text-lg font-mediumfont-medium text-indigo-500 mb-1">Begin with choosing a template</h1>
            
            <p class="font-normal text-justify">Find one of our elegant, expertly crafted templates that suit your taste, profession and employer’s image. Choose an accent color to grab the reader’s attention. We have several resume template categories to choose from, depending on your sensibilities, visual demands and industry.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-xl" src={gallery2}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 class="tracking-widest title-font text-lg font-mediumfont-medium text-indigo-500 mb-1">Add your personal info</h1>
            
            <p class="font-normal text-justify">Fill in your contact information and link your websites so that your resume performs as your personal ambassador. Never worry about it getting lost among other candidates, as our powerful, attention-grabbing headers help recruiters visually identify your document among many others.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-xl" src={gallery3}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 class="tracking-widest title-font text-lg font-mediumfont-medium text-indigo-500 mb-1">Fill in the sections</h1>
            
            <p class="font-normal text-justify">Write or generate a short summary, fill in the bullet points of your employment history, education and skills. All of the sections are easy to complete and require minimal effort. Compared to traditional text editing software, resume creation with our builder is easy and convenient.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-xl" src={gallery4}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 class="tracking-widest title-font text-lg font-mediumfont-medium text-indigo-500 mb-1">Customize the layout</h1>
            
            <p class="font-normal text-justify">Custom-tailor the design and structure of your resume in just a few clicks. You can also add any special sections if you want or need them. Awards? Certifications? Honors? If you have them, we’ll help you list them. Font sizes and colors are customizable as well and decide whether you’re satisfied.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-xl" src={gallery5}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 class="tracking-widest title-font text-lg font-mediumfont-medium text-indigo-500 mb-1">Download file in Pdf formats</h1>
            
            <p class="font-normal text-justify">CreateResume provides PDF exports by one click download. You can also share your resume directly. Make use of PDF files to perfectly preserve your beautiful formatting. That’s it. Just easy editing, save time, beautiful design and excellent resume formatting provided by us!</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-xl" src={gallery6}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 class="tracking-widest title-font text-lg font-mediumfont-medium text-indigo-500 mb-1">Create account to edit changes</h1>
            
            <p class="font-normal text-justify"> The users can easily re-update the content of their resumes and then save the edited version for future use or distribution. It allows individuals to keep their resumes up-to-date and tailored to specific job opportunities to make use of powerful visualizations and clean formatting!</p>
          </div>
        </div>
      </div>
      </div>
      </div>     
  </div>

</section>
  )
}

export default Process