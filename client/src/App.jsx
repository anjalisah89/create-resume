import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './App.css'; 
import Nav from './Nav';
import Section from './Section';
import Form from './Form';
import Team from './Team';
import Feedback from './Feedback';
import Footer from './Footer';
import Process from './Process';

function App() {
  const [state, setstate] = useState({
    name: '',
    receiptId: '',
    price1: '',
    price2: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setstate((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const downloadPdf = () => {
    axios.post('/create-pdf', state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob'}))
      .then((res) =>{
        const pdfBlob = new Blob([res.data], {type:'application/pdf'});
        saveAs(pdfBlob, 'newPdf.pdf')
      })
      .catch((error) => {
        console.error('Error creating PDF:', error);
      });
  };



  return (

     <div className='overflow-hidden dark:bg-gradient-to-r from-slate-900 to-slate-700'>      
     <Nav/>
     <Section />
     <Process />
     <Form />
     
     <div>
     <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
           
        <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="name" name="name" onChange={handleChange} />
        <input className='font-medium rounded-lg text-sm px-4 py-2' type="number" placeholder="Contact" name="receiptId" onChange={handleChange} />
        <input className='font-medium rounded-lg text-sm px-4 py-2' type="number" placeholder="E-mail" name="price1" onChange={handleChange} />
        <input className='font-medium rounded-lg text-sm px-4 py-2'type="number" placeholder="Profile Image" name="price2" onChange={handleChange} />
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={downloadPdf} >Download PDF</button>
        </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div class="mt-2">
          <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="last" name="last" onChange={handleChange} />
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>
        

        </div>
       
        </div>
        </div>

     <Team/>
     <Feedback/>
     <Footer />
     </div>
  

  );
}

export default App;

