import React, { useEffect, useState } from 'react';
import axios from "../modules/axios";
import { useNavigate } from 'react-router-dom';

export default function AltriProfili({ profiles, setProfiles }) {
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
  }, [setProfiles]);

  function getRandomProfiles(profiles, num) {
    const shuffled = profiles.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  // Funzione per troncare il testo
  const truncateText = (text, limit) => {
    if (!text) {
      return '';
    }
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + '...';
  };

  const randomProfiles = getRandomProfiles(profiles, 4);

  return (
    <>
      {randomProfiles.map((profile) => (
        <div key={profile._id} onClick={() => vaiAlProfilo(profile._id)}>
          <div className="flex gap-5 mt-3">
            <img className="border-[2px] rounded-full p-3 w-[30%] h-[30%]" src={profile.image} alt="img" />
            <div>
              <p>{profile.name} {profile.surname}</p>
              <p>{truncateText(profile.bio, 30)}</p> {/* Troncamento del testo */}
            </div>
          </div>
          <div className="flex items-center justify-center mt-3 border-b-[1px]">
            <button className="border-[1px] border-black rounded-full px-5 py-1 mb-5">Messaggio</button>
          </div>
        </div>
      ))}
    </>
  );
}
