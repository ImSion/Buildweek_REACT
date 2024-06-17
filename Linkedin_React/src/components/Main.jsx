import React from 'react'
import axios from '../modules/axios'

export default function Main() {

   axios.get('/profile/me')
    .then((response) => {
      console.log("Data received:", response.data);
    })
    .catch((error) => {
      if (error.response) {
        console.error(`HTTP error: ${error.response.status}`);
      } else if (error.request) {
        console.error("Request error: No response received");
      } else {
        console.error("Error:", error.message);
      }
    });

    axios.put('/profile/me')
    .then((response) => {
      console.log("Data received:", response.data);
    })
    .catch((error) => {
      if (error.response) {
        console.error(`HTTP error: ${error.response.status}`);
      } else if (error.request) {
        console.error("Request error: No response received");
      } else {
        console.error("Error:", error.message);
      }
    });


  return (
    <div className='bg-[#f4f2ee]'>

      <h1>ciao</h1>
    </div>
  )
}
