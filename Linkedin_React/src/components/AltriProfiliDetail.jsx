import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../modules/axios";

export default function AltriProfiliDetail({ profiles, setProfiles}) {
    

    const { id } = useParams();

    const utenteTrovato = profiles.find(
        (utente) => utente.id === parseInt(id),
        // parseInt(id) perchè l'id dell'oggetto è un numero,
        // mentre quello che prendo dall'URL è una stringa!
    );

    console.log(profiles);


    useEffect(() => {
        const fetchAllProfile = async () => {
            try {
              const response = await axios.get(`/profile/{userId}`);
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
        {profiles ? (
            <div className="container mx-auto flex mt-7 px-[70px] items-start justify-center">
            <div className="w-[804px] flex flex-col relative">
                <div className="h-[200px] w-[100%] bg-blue-800 rounded-t-lg"></div>
                <div className="bg-[#fff] p-5 pb-3 rounded-b-lg border-[1px]">
                    <div>
                        <img
                        className="w-[150px] rounded-full absolute top-[100px] left-[30px] border-[5px] border-white"
                        src={utenteTrovato.image}
                        alt="immagine profilo"
                        />
                    </div>
                    <div className="mt-[80px]">
                        <h2 className="py-1 text-2xl font-semibold">
                        {utenteTrovato.name} {utenteTrovato.surname}
                        </h2>
                        <p>{utenteTrovato.title}</p>
                        <p className="py-2">{utenteTrovato.area}</p>
                    </div>
                </div>
                
            </div>
            <div className="w-[300px] ml-7 px-4 h-[700px] bg-[#fff] border-[2px] rounded-lg">
            <h2 className="font-semibold mt-4">Altri profili simili</h2>
                <AltriProfili />
            </div>
            {console.log(profiles)}
            </div>
        ) : (
            <div>Caricamento...</div>
        )}
    </>
  )
}
