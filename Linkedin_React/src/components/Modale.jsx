import { Label, Modal, Select, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import axios from '../modules/axios';

export default function Modale({ id, experience, setExperience, openModal, setOpenModal, selectedExperience, setSelectedExperience }) {
    
  const [inputRole, setInputRole] = useState(selectedExperience?.role || '');
  const [inputCompany, setInputCompany] = useState(selectedExperience?.company || '');
  const [inputStartDate, setInputStartDate] = useState(selectedExperience?.startDate || '');
  const [inputEndDate, setInputEndDate] = useState(selectedExperience?.endDate || '');
  const [inputDescription, setInputDescription] = useState(selectedExperience?.description || '');
  const [inputArea, setInputArea] = useState(selectedExperience?.area || '');

  useEffect(() => {
    if (selectedExperience) {
        setInputRole(selectedExperience.role);
        setInputCompany(selectedExperience.company);
        setInputStartDate(selectedExperience.startDate);
        setInputEndDate(selectedExperience.endDate);
        setInputDescription(selectedExperience.description);
        setInputArea(selectedExperience.area);
    }
  }, [selectedExperience]);
    

  const AddOrUpdateExperience = async () => {
    const experienceData = {
        role: inputRole,
        company: inputCompany,
        startDate: inputStartDate,
        endDate: inputEndDate,
        description: inputDescription,
        area: inputArea
    };

    if (selectedExperience) {
        // Update existing experience
        await updateExperience(selectedExperience._id, experienceData);
    } else {
        // Add new experience
        await addExperience(experienceData);
    }

    setOpenModal(false);
    setSelectedExperience(null);
};

const updateExperience = async (experienceId, data) => {
  try {
      const response = await axios.put(`/profile/${id}/experiences/${experienceId}`, data);
      setExperience(prevExperiences => 
          prevExperiences.map(exp => exp._id === experienceId ? response.data : exp)
      );
  } catch (error) {
      console.error("Error updating experience:", error);
  }
};
const deleteExperience = async (experienceId, data) => {
  try {
      const response = await axios.delete(`/profile/${id}/experiences/${experienceId}`, data);
      console.log(response);
      setExperience(prevExperiences => 
          prevExperiences.filter(exp => exp._id !== experienceId)
      );
      setOpenModal(false);
      setSelectedExperience(null);
  } catch (error) {
      console.error("Error updating experience:", error);
  }
};

// Rename fetchExperience to addExperience for clarity
const addExperience = async (data) => {
  try {
      const response = await axios.post(`/profile/${id}/experiences`, data);
      console.log(response.data);
      setExperience(prevExperiences => [...prevExperiences, response.data]);
  } catch (error) {
      console.error("Error adding experience:", error);
  }
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
                  <button onClick={() => deleteExperience(selectedExperience._id)} className="font-semibold text-[#181818] rounded-lg px-5 py-1 hover:bg-[#f4f2ee]" type="submit">Elimina esperienza</button>
                  <button className="text-white font-semibold rounded-xl bg-[#0a66c2] w-[10%] px-5 py-1 flex justify-center" type="submit" onClick={(e) => AddOrUpdateExperience ()}>Salva</button>
                </div>
              </Modal.Body>
          </Modal>
        </button>
    </>
  )
}
