import React from 'react'
import axios from '../modules/axios'

export default function GetProfiles() {

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
    <div>

    </div>
  )
}
