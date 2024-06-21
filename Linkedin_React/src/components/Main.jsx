import React, { useEffect, useState } from "react";
import axios from "../modules/axios";
import AltriProfili from "./AltriProfili";
import Modale from "./Modale";
import ButtonExperience from "./ButtonExperience";
import hamburger from '../assets/pngwing.com.png';
import ProfileImageModal from "./ProfileImageModal";

export default function MainGet({ profile, setProfile, profiles, setProfiles, search }) {
  
  const [experience, setExperience] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(true);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isProfileImageModalOpen, setIsProfileImageModalOpen] = useState(false);

  const experienceArray = Object.values(experience);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/profile/me");
        setProfile(response.data);
        // console.log(response.data);
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
  }, [setProfile]);

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
  }, [selectedExperience]);

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
      {profile && ( 
        <div className={`bg-white border-b-[1px] fixed w-[100%] h-[48px] transition-all duration-300 ${isProfileVisible ? 'top-[0px]' : 'top-[48px] shadow-[0_0px_10px_0px_rgba(10,10,10,10)]'} z-10`}>
          <div className="px-10 flex">
            <div>
              <img
                className="w-[32px] h-[32px] rounded-full mt-2 border-white"
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
      )}

      {profile ? (
        <div className="mx-auto flex px-[70px] items-start justify-center mt-12">
          <div className="w-[804px] flex flex-col relative mt-7">
            <div className="h-[200px] w-[100%] bg-blue-800 rounded-t-lg"></div>
            <div id="profile-section" className="bg-[#fff] p-5 pb-3 rounded-b-lg border-[1px]">
              <div>
                <img
                  className="w-[150px] h-[150px] rounded-full absolute top-[100px] left-[30px] border-[4px] border-white cursor-pointer"
                  src={profile.image}
                  alt="immagine profilo"
                  onClick={() => setIsProfileImageModalOpen(true)}
                />
              </div>
              <div className="mt-[30px]">
                <h2 className="py-1 text-2xl font-semibold">
                  {profile.name} {profile.surname}
                </h2>
                <p>{profile.title}</p>
                <p className="py-2">{profile.area}</p>
              </div>
            </div>
            <div className="w-[100%] bg-[#fff] my-2 rounded-lg border-[1px] p-5">
              <div className="flex justify-between mt-2">
                <h3 className="text-2xl">Esperienze</h3>
                <div className="flex items-start gap-[12px]">
                  <Modale
                    experience={experience} setExperience={setExperience} openModal={openModal} setOpenModal={setOpenModal} id={profile._id} 
                    selectedExperience={selectedExperience}
                    setSelectedExperience={setSelectedExperience}
                  />
                  <ButtonExperience setOpenModal={setOpenModal} setExperience={setExperience} profile={profile} experienceArray={experienceArray} profiles={profiles} setProfiles={setProfiles}/>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  {experienceArray.slice(-3).map((element) => (
                    <div className="border-red-500" key={element._id}> 
                      <div className="flex gap-[20px] mb-4 justify-between">
                        <div className="flex">
                          <div>
                            <img className="rounded-full w-[50px] h-[50px] mr-3" src={hamburger} alt="img" />
                          </div>
                          <div className="flex flex-col">
                            <h5 className="font-semibold">{element.role}</h5>
                            <h4>{element.company}</h4>
                            <span>{element.startDate} - {element.endDate}</span>
                            <span className="mb-3 italic">{element.area}</span>
                            <p>{element.description}</p>
                          </div>
                        </div>
                        <span onClick={() => {
                          setOpenModal(true);
                          setSelectedExperience(element);
                        }}> <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                          ><path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                          />
                        </svg>
                      </span>
                    </div>                      
                  </div>                    
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-[#fff] rounded-lg border-[1px] p-5 mb-2">
              <h1 className="font-semibold text-xl">Informazioni</h1>
            </div>

            <div className="bg-[#fff] rounded-lg border-[1px] p-5 mb-2">

              <h1 className="font-semibold text-xl">Attività</h1>
              <h6 className="text-[14px] font-semibold text-blue-700 mb-3">479 follower</h6>
              <div className="mb-8 flex gap-2">
                <p className="bg-[#004c33] text-white font-semibold rounded-full w-14 h-8 flex items-center justify-center text-center hover:bg-[#0e2c21] cursor-pointer">Post</p>
                <p className="border-[1px] border-[#666666] text-[#181818] font-semibold rounded-full w-24 h-8 flex items-center justify-center text-center hover:border-[3px] cursor-pointer">Commenti</p>
                <p className="border-[1px] border-[#666666] text-[#181818] font-semibold rounded-full w-24 h-8 flex items-center justify-center text-center hover:border-[3px] cursor-pointer">Immagini</p>

              </div>

              <div className="mb-3 gap-4">
                <h6 className="text-xs font-semibold text-[#666666] mb-2">Gabriele Romano <span className="font-normal">ha pubblicato questo post • 2 giorni</span></h6>
                <div className="flex gap-4">
                  <img className="min-w-[70px] h-[70px] rounded-lg" src="https://picsum.photos/seed/picsum/200/300" alt="post-image" />
                  <p className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio tenetur voluptatibus dignissimos corrupti quisquam perferendis, aspernatur fugit ex sed saepe voluptatum dicta tempora consectetur, quaerat blanditiis. Maxime possimus ea ratione?</p>
                </div>
                <div className="flex justify-between border-b pb-4 mt-5">

                  <div className="flex relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 bg-[#378fe9] border-white border p-[1px] rounded-full text-white">
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 bg-[#df704d] border-white border p-[1px] rounded-full text-white absolute left-3">
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg> 
                  </div>

                  <p className="text-xs text-[#666666]">3 commenti</p>
                  
                </div>
              </div>

              <div className="mb-3 gap-4">
              <h6 className="text-xs font-semibold text-[#666666] mb-2">Michele Altieri <span className="font-normal">ha pubblicato questo post • 1 giorni</span></h6>
                <div className="flex gap-4">
                  <img className="min-w-[70px] h-[70px] rounded-lg" src="https://picsum.photos/seed/{10}picsum/200/300" alt="post-image" />                 
                  <p className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio tenetur voluptatibus dignissimos corrupti quisquam perferendis, aspernatur fugit ex sed saepe voluptatum dicta tempora consectetur, quaerat blanditiis. Maxime possimus ea ratione?</p>
                </div>
                <div className="flex justify-between border-b pb-4 mt-5">

                  <div className="flex relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 bg-[#378fe9] border-white border p-[1px] rounded-full text-white">
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 bg-[#df704d] border-white border p-[1px] rounded-full text-white absolute left-3">
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg> 
                  </div>

                  <p className="text-xs text-[#666666]">5 commenti</p>
                  
                </div>
              </div>

              <div className="mb-3 gap-4">
              <h6 className="text-xs font-semibold text-[#666666] mb-2">Costantino Grabesu <span className="font-normal">ha pubblicato questo post • 34m</span></h6>
                <div className="flex gap-4">
                  <img className="min-w-[70px] h-[70px] rounded-lg" src="https://picsum.photos/seed/{12}picsum/200/300" alt="post-image" />
                  <p className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio tenetur voluptatibus dignissimos corrupti quisquam perferendis, aspernatur fugit ex sed saepe voluptatum dicta tempora consectetur, quaerat blanditiis. Maxime possimus ea ratione?</p>
                </div>
                <div className="flex justify-between border-b pb-4 mt-5">

                  <div className="flex relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 bg-[#378fe9] border-white border p-[1px] rounded-full text-white">
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 bg-[#df704d] border-white border p-[1px] rounded-full text-white absolute left-3">
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    
                    </svg>
                    <span className="ml-5 text-xs">8</span> 
                  </div>

                  <p className="text-xs text-[#666666]">1 commento</p>
                  
                </div>
              </div>

              <div className="mb-3 gap-4">
              <h6 className="text-xs font-semibold text-[#666666] mb-2">Vincenzo Perretta <span className="font-normal">ha pubblicato questo post • 58m</span></h6>
                <div className="flex gap-4">
                  <img className="min-w-[70px] h-[70px] rounded-lg" src="https://picsum.photos/seed/{15}picsum/200/300" alt="post-image" />
                  <p className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio tenetur voluptatibus dignissimos corrupti quisquam perferendis, aspernatur fugit ex sed saepe voluptatum dicta tempora consectetur, quaerat blanditiis. Maxime possimus ea ratione?</p>
                </div>
                <div className="flex justify-between border-b pb-4 mt-5">

                  <div className="flex relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 bg-[#378fe9] border-white border p-[1px] rounded-full text-white">
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 bg-[#df704d] border-white border p-[1px] rounded-full text-white absolute left-3">
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg> 
                  </div>

                  <p className="text-xs text-[#666666]">1 commento</p>
                  
                </div>
              </div>

            </div>
          </div>
          <div className="w-[300px] ml-7 px-4 h-[100%] bg-[#fff] border-[2px] rounded-lg mt-[26px]">
            <h2 className="font-semibold mt-4">Altri profili simili</h2>
            <AltriProfili profiles={profiles} setProfiles={setProfiles} search={search}/>
          </div>
        </div>
      ) : (
        <div>Caricamento...</div>
      )}

      {isProfileImageModalOpen && (
        <ProfileImageModal 
          profile={profile} 
          setProfile={setProfile} 
          onClose={() => setIsProfileImageModalOpen(false)}
        />
      )}
    </>
  );
}
