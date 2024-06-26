import { useEffect } from "react";

export default function Experience({setExperience, profile, experienceArray, profiles, setProfiles}) {

  
  // const updateForm = {
  //   role: newRole,
  //   company: newCompany,
  //   startDate: newStartDate,
  //   endDate: newEndDate,
  //   area: newArea
  // }
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get('/profile/'+id.id+'/experiences', updateForm);
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
    <div>
      {profile ? (
        <div className="container mx-auto flex mt-7 px-[70px] items-start justify-center">
          <div className="w-[804px] flex flex-col relative">
            <div className="h-[200px] w-[100%] bg-blue-800 rounded-t-lg"></div>
            <div className="bg-[#fff] p-5 pb-3 rounded-b-lg border-[1px]">
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
                {experienceArray.slice(3,6).map((element) => (
                    <div className="border-red-500">
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
          </div>
          <div className="w-[300px] ml-7 px-4 h-[700px] bg-[#fff] border-[2px] rounded-lg">
          <h2 className="font-semibold mt-4">Altri profili simili</h2>
            <AltriProfili profiles={profiles} setProfiles={setProfiles}/>
          </div>
        </div>
      ) : (
        <div>Caricamento...</div>
      )}
    </div>
  )
}
