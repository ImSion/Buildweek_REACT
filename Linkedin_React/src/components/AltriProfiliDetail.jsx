import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../modules/axios";
import AltriProfili from "./AltriProfili";

export default function AltriProfiliDetail({ profile, profiles, setProfiles }) {

  const [utente, setUtente] = useState([]);
    

    const id  = useParams();

    const utenteTrovato = profiles.find(
        (utente) => utente.id === parseInt(id),
        // parseInt(id) perchè l'id dell'oggetto è un numero,
        // mentre quello che prendo dall'URL è una stringa!
    );

    console.log(id);


    useEffect(() => {
      console.log(id)
        const fetchAllProfile = async () => {
            try {
              const response = await axios.get(`/profile/`+id.id);
              setUtente(response.data);
              console.log(utente);
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
    },[setUtente]);

  return (
    <>
        {profiles ? (
            <div onClick={() => vaiAlProfilo(profile._id)} className="container mx-auto flex mt-7 px-[70px] items-start justify-center">
            <div className="w-[804px] flex flex-col relative mt-11">
                <div className="h-[200px] w-[100%] bg-blue-800 rounded-t-lg"></div>
                <div className="bg-[#fff] p-5 pb-3 rounded-b-lg border-[1px]">
                    <div>
                        <img
                        className="w-[150px] rounded-full absolute top-[100px] left-[30px] border-[5px] border-white"
                        src={utente.image}
                        alt="immagine profilo"
                        />
                    </div>
                    <div className="mt-[80px]">
                        <h2 className="py-1 text-2xl font-semibold">
                        {utente.name} {utente.surname}
                        </h2>
                        <p>{utente.title}</p>
                        <p className="py-2">{utente.area}</p>
                    </div>
                </div>
                
            </div>
            <div className="w-[300px] ml-7 px-4 h-[100%] bg-[#fff] border-[2px] rounded-lg mt-11">
            <h2 className="font-semibold mt-4">Altri profili simili</h2>
            <AltriProfili profile={profile} profiles={profiles} setProfiles={setProfiles}/>
            </div>
            {console.log(profiles)}
            </div>
        ) : (
            <div>Caricamento...</div>
        )}
    </>
  )
}
