import React, { useEffect, useState,  } from "react";
import axios from "../modules/axios";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

export default function MainGet() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/profile/me");
        setProfile(response.data);
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          console.error(`HTTP error: ${error.response.status}`);
        } else if (error.request) {
          console.error("Request error: No response received");
        } else {
          console.error("Error:", error.message);
        }
      }
    };
    fetchProfile();
  }, []);

  // axios
  //   .put("/profile/me")
  //   .then((response) => {
  //     console.log("Data received:", response.data);
  //   })
  //   .catch((error) => {
  //     if (error.response) {
  //       console.error(`HTTP error: ${error.response.status}`);
  //     } else if (error.request) {
  //       console.error("Request error: No response received");
  //     } else {
  //       console.error("Error:", error.message);
  //     }
  //   });

 
    // const [experience, setExperience] = useState(null);
  
    // useEffect(() => {
    //   const fetchExperience = async () => {
    //     try {
    //       const response = await axios.get("/profile/:userId/experiences");
    //       setExperience(response.data);
    //       console.log(response.data);
    //     } catch (error) {
    //       if (error.response) {
    //         console.error(`HTTP error: ${error.response.status}`);
    //       } else if (error.request) {
    //         console.error("Request error: No response received");
    //       } else {
    //         console.error("Error:", error.message);
    //       }
    //     }
    //   };
    //   fetchExperience();
    // }, []);
  
  return (
    <>
      {profile ? (
        <div className="container mx-auto flex mt-7">
          <div className="w-[1200px] flex flex-col relative">
            <div className="h-[300px] w-[100%] bg-blue-800"></div>
            <div>
              <div>
                <img
                  className="w-[150px] rounded-full absolute top-[220px] left-[20px]"
                  src={profile.image}
                  alt="immagine profilo"
                />
              </div>
              <div className="mt-[80px]">
              <p className="py-1">{profile.name} {profile.surname}</p>
              <p>{profile.title}</p>
              <p className="py-2">{profile.area}</p>
              </div>
            </div>
            <div className="w-[100%] h-[300px] bg-[#f4f2ee] my-10 flex justify-between">
            <h5>Experiences</h5>
            <div className="flex">

          {/*Inizio modale*/}
          
            <span className="rounded-full bg-white h-[25px]">
            <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" ref={emailInputRef} placeholder="name@company.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
            </span>


<p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
</p>
</div>
          </div>
          </div>
          <div className="w-[200px] ml-7">
            <h1>Ciao</h1>
          </div>
        </div>
      ) : (
        <div>Caricamento...</div>
      )}
    </>
  );
}


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

