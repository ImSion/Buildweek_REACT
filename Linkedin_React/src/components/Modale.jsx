import { Label, Modal, Select, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import axios from '../modules/axios';
import Input from './Input';

export default function Modale({ id, experience, setExperience, openModal, setOpenModal }) {
    
    const [inputRole, setInputRole] = useState();
    const [inputCompany, setInputCompany] = useState();
    const [inputStartDate, setInputStartDate] = useState();
    const [inputEndDate, setInputEndDate] = useState();
    const [inputDescription, setInputDescription] = useState();
    const [inputArea, setInputArea] = useState();
    

    const AddExperience = async () => {
      const newExperience = {
        role: inputRole,
        company: inputCompany,
        startDate: inputStartDate,
        endDate: inputEndDate,
        description: inputDescription,
        area: inputArea
      };
      
      setExperience(prevExperiences => [...prevExperiences, newExperience]);
      
      await fetchExperience(newExperience);
    };

    const fetchExperience = async (experience) => {
        try {
          console.log(experience);
            // console.log(experience.value)
            // console.log(id)
          const response = await axios.post(`/profile/:${id}/experiences`,experience);
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
    
    
  return (
    <>
        <button className="rounded-full bg-white h-[25px]">
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Aggiungi Esperienza</Modal.Header>
              <Modal.Body>              
                <form className="flex flex-col gap-4 w-[100%] pb-[20px] border-b-[1px] mb-[15px]">
                  <div>
                    <div className="block">
                      <Label htmlFor="role" value="Competenza*" />
                      <TextInput id="role" type="text" placeholder="Competenza (es. React Developer)" required shadow 
                      value={inputRole}
                    onChange={(e) => setInputRole(e.target.value)}/>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 block">
                      <Label htmlFor="company" value="Azienda" />
                      <TextInput id="role" type="text" placeholder="Competenza (es. React Developer)" required shadow 
                      value={inputCompany}
                      onChange={(e) => setInputCompany(e.target.value)}/>
                    </div>

                    <Label htmlFor="date" value="Data di inizio" />
                    <TextInput type="date" value={inputStartDate}
                    onChange={(e) => setInputStartDate(e.target.value)} />
                  

                    <Label htmlFor="date" value="Data di fine" />
                    <TextInput type="date"value={inputEndDate}
                    onChange={(e) => setInputEndDate(e.target.value)} />
                    
                  </div>
                  <div>
                      <div className="block">
                        <Label htmlFor="description" value="Descrizione" />
                      </div>
                      <TextInput id="description" type="text" value={inputDescription}
                    onChange={(e) => setInputDescription(e.target.value)} />
                  </div>
                  <div>
                    <div>
                      <Label htmlFor="location" value="Luogo" />
                    </div>
                    <TextInput id="location" type="text" value={inputArea}
                    onChange={(e) => setInputArea(e.target.value)} />
                  </div>        
              
                </form>
                <div className="flex justify-between">
                  <button className="font-semibold text-[#181818] rounded-lg px-5 py-1 hover:bg-[#f4f2ee]" type="submit">Elimina esperienza</button>
                  <button className="text-white font-semibold rounded-xl bg-[#0a66c2] w-[10%] px-5 py-1 flex justify-center" type="submit" onClick={(e) => AddExperience()}>Salva</button>
                </div>
              </Modal.Body>
          </Modal>
        </button>
    </>
  )
}
