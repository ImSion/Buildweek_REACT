import React, { useEffect, useState } from "react";
import axios from "../modules/axios";
import AltriProfili from "./AltriProfili";
import Modale from "./Modale";
import ButtonExperience from "./ButtonExperience";
import hamburger from '../assets/pngwing.com.png'


export default function MainGet({ profiles, setProfiles}) {
  const [profile, setProfile] = useState(null);
  const [experience, setExperience] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(true);

  const experienceArray = Object.values(experience);

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

  useEffect(() => {
    const handleScroll = () => {
      const profileElement = document.getElementById('profile-section');
      if (profileElement) {
        const rect = profileElement.getBoundingClientRect();
        setIsProfileVisible(rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`bg-white border-b-[1px] fixed w-[100%] h-[48px] transition-all duration-300 ${isProfileVisible ? 'top-[0px]' : 'top-[48px] shadow-[0_0px_10px_0px_rgba(10,10,10,10)]'} z-10`}>
        <div className="px-10 flex">
          <div>
            <img
              className="w-[32px] rounded-full mt-2 border-white"
              src={profile.image}
              alt="immagine profilo"
            />
          </div>
          <div className="ml-2">
                <h2 className="mt-1 text-sm font-semibold">
                  {profile.name} {profile.surname}
                </h2>
                <div className="flex text-xs">
                  <p>{profile.title}</p>
                  <p className="mx-5">{profile.area}</p>
                </div>
                
          </div>
        </div>
        
      </div>

      {profile ? (
        <div className="container mx-auto flex px-[70px] items-start justify-center mt-12">
          <div className="w-[804px] flex flex-col relative mt-7">
            <div className="h-[200px] w-[100%] bg-blue-800 rounded-t-lg"></div>
            <div id="profile-section" className="bg-[#fff] p-5 pb-3 rounded-b-lg border-[1px]">
              <div>
                <img
                  className="w-[150px] rounded-full absolute top-[100px] left-[30px] border-[5px] border-white"
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
            <div className="w-[100%] bg-[#fff] my-2 rounded-lg border-[1px] p-5">
              <div className="flex justify-between">
                <h3 className="text-2xl">Esperienze</h3>
                <div className="flex items-start gap-[12px]">
                  <Modale experience={experience} setExperience={setExperience} openModal={openModal} setOpenModal={setOpenModal} id={profile._id} />
                  <ButtonExperience setOpenModal={setOpenModal}/>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  {experienceArray.slice(3, 6).map((element) => (
                    <div className="border-red-500" key={element.id}>
                      <div className="flex gap-[20px] mb-4">
                        <div>
                          <img className="rounded-full w-[50px] h-[50px]" src={hamburger} alt="img" />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="font-semibold">{element.role}</h5>
                          <h4>{element.company}</h4>
                          <span>{element.startDate} - {element.endDate}</span>
                          <span className="mb-3 italic">{element.area}</span>
                          <p>{element.description}</p>
                        </div>
                      </div>                      
                    </div>                    
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-red-300">ciao</div>
          </div>
          <div className="w-[300px] ml-7 px-4 h-[700px] bg-[#fff] border-[2px] rounded-lg mt-[26px]">
            <h2 className="font-semibold mt-4">Altri profili simili</h2>
            <AltriProfili profiles={profiles} setProfiles={setProfiles}/>
          </div>
        </div>
      ) : (
        <div>Caricamento...</div>
      )}
    </>
  );
}
