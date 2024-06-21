import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../modules/axios";

export default function AltriProfili({ profiles, setProfiles, search }) {
  const navigazione = useNavigate();
  const [randomProfiles, setRandomProfiles] = useState([]);

  function vaiAlProfilo(id) {
    navigazione(`/profile/${id}`);
  }

  useEffect(() => {
    const fetchAllProfile = async () => {
      try {
        const response = await axios.get("/profile");
        setProfiles(response.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };
    fetchAllProfile();
  }, [setProfiles]);

  useEffect(() => {
    if (profiles.length > 0) {
      const shuffled = [...profiles].sort(() => 0.5 - Math.random());
      setRandomProfiles(shuffled.slice(0, 4));
    }
  }, [profiles]);

  const filteredProfiles = useMemo(() => {
    if (!search) return randomProfiles;
    return profiles.filter(profile => 
      profile.name.toLowerCase().includes(search.toLowerCase()) || 
      profile.surname.toLowerCase().includes(search.toLowerCase()) ||
      (profile.bio && profile.bio.toLowerCase().includes(search.toLowerCase()))
    ).slice(0, 4);
  }, [search, randomProfiles, profiles]);

  const truncateText = (text, limit) => {
    if (!text) return '';
    return text.length <= limit ? text : text.substring(0, limit) + '...';
  };

  const profilesToShow = search ? filteredProfiles : randomProfiles;

  return (
    <>
      {profilesToShow.map((profile) => (
        <div key={profile._id} onClick={() => vaiAlProfilo(profile._id)}>
          <div className="flex gap-5 mt-3">
            <img className="border-[2px] rounded-full w-[48px] h-[48px]" src={profile.image} alt="img" />
            <div>
              <p>{profile.name} {profile.surname}</p>
              <p>{truncateText(profile.bio, 30)}</p>
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