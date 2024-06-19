import React, { useEffect, useState } from 'react'
import axios from "../modules/axios";
import { useNavigate } from 'react-router-dom';


export default function AltriProfili({ profiles, setProfiles}) {

  const navigazione = useNavigate();
  

  function vaiAlProfilo(id) {
    // Naviga alla rotta "/prodotti/:prodottoId"
    navigazione(`/profile/${id}`);
  }

  useEffect(() => {
    const fetchAllProfile = async () => {
        try {
          const response = await axios.get("/profile");
          setProfiles(response.data);
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
    fetchAllProfile();
  }, []);
  

  return (
    <>
        {profiles.slice(20,24).map((profile) =>
        <div profiles={profiles} setProfiles={setProfiles} onClick={() => vaiAlProfilo(profile._id)}>
            <div className="flex gap-5 mt-3">
              <img className="border-[2px] rounded-full p-3 w-[30%] h-[30%]" src={profile.image} alt="img" />
              <div>
                <p>{profile.name} {profile.surname}</p>
                <p>{profile.bio}</p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-3 border-b-[1px]">
              <button className="border-[1px] border-black rounded-full px-5 py-1 mb-5">Messaggio</button>
            </div> 
            {console.log(profiles)}
        </div>
        )}
    </>
  )
  
}
