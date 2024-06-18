import React, { useEffect, useState } from "react";
import axios from "../modules/axios";
import { Button, TextInput, Label, Modal, Checkbox, Select } from "flowbite-react";
import Input from "./Input";

export default function MainGet() {
  const [profile, setProfile] = useState(null);
  const [openModal, setOpenModal] = useState(false);

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
                <p className="py-1">
                  {profile.name} {profile.surname}
                </p>
                <p>{profile.title}</p>
                <p className="py-2">{profile.area}</p>
              </div>
            </div>
            <div className="w-[100%] h-[300px] bg-[#f4f2ee] my-10 flex justify-between">
              <h5>Experiences</h5>
              <div className="flex">
    
     {/*Inizio modale*/}

                <span className="rounded-full bg-white h-[25px]"><div  onClick={() => setOpenModal(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M12 4.5v15m7.5-7.5h-15"
                  />
                  </svg>
                </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Aggiungi Esperienza</Modal.Header>
        <Modal.Body>
          
        <form className="flex flex-col gap-4 w-[100%]">
          <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <Label htmlFor="date" value="Data di inizio" />
        <div className="flex w-[100%]">
        
          <div className="w-[50%] mr-3">
            <Select required>
              <option>Gennaio</option>
              <option>Febbraio</option>
              <option>Marzo</option>
              <option>Aprile</option>
              <option>Maggio</option>
              <option>Giugno</option>
              <option>Luglio</option>
              <option>Agosto</option>
              <option>Settembre</option>
              <option>Ottobre</option>
              <option>Novembre</option>
              <option>Dicembre</option>
            </Select>
          </div>
          <div className="w-[50%]"> 
            <Select required>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
            </Select>
          </div>
        </div>
        
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      
      <Button type="submit">Register new account</Button>
    </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal></span>

                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
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


