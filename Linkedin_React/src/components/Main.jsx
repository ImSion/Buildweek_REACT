import React, { useEffect, useState } from "react";
import axios from "../modules/axios";
import AltriProfili from "./AltriProfili";
import Modale from "./Modale";

export default function MainGet() {
  const [profile, setProfile] = useState(null);
  const [experience, setExperience] = useState(null);
  const [dati, setDati] = useState([]);

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


  const updateDati = (id) => {

    axios.put(`/profile/${id}`)
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
  }


  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get(`/profile/66706ee951a3a20015f06302/experiences`);
        setExperience(response.data);
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
    fetchExperience();
  }, []);

  return (
    <>
      {profile ? (
        <div className="container mx-auto flex mt-7 px-[70px]">
          <div className="w-[1200px] flex flex-col relative">
            <div className="h-[300px] w-[100%] bg-blue-800 rounded-t-lg"></div>
            <div className="bg-[#fff] px-5 pb-3 rounded-b-lg border-[1px]">
              <div>
                <img
                  className="w-[150px] rounded-full absolute top-[220px] left-[20px] border-[5px] border-white"
                  src={profile.image}
                  alt="immagine profilo"
                />
              </div>
              <div className="mt-[80px]">
                <h2 className="py-1 text-2xl font-semibold">
                  {profile.name} {profile.surname}
                </h2>
                <p>{profile.title}</p>
                <p className="py-2">{profile.area}</p>
              </div>
            </div>
            <div className="w-[100%] h-[200px] bg-[#fff] my-2 flex justify-between rounded-lg p-5 border-[1px]">
              <h3 className="text-2xl">Esperienze</h3>
              <div className="flex gap-[12px]">
    
     {/*Inizio modale*/}

                <Modale id={profile._id} />

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
          <div className="w-[300px] ml-7 px-4 h-[700px] bg-[#fff] border-[2px] rounded-lg">
          <h2 className="font-semibold mt-4">Altri profili simili</h2>
            <AltriProfili />
          </div>
        </div>
      ) : (
        <div>Caricamento...</div>
      )}
    </>
  );
}


