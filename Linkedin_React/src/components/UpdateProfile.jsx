import { Label, Modal, TextInput, Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import axios from '../modules/axios';

export default function UpdateProfile({ profile, setProfile, openModal, setOpenModal }) {
  const [inputName, setInputName] = useState(profile?.name || '');
  const [inputSurname, setInputSurname] = useState(profile?.surname || '');
  const [inputTitle, setInputTitle] = useState(profile?.title || '');
  const [inputArea, setInputArea] = useState(profile?.area || '');

  useEffect(() => {
    if (profile) {
      setInputName(profile.name || '');
      setInputSurname(profile.surname || '');
      setInputTitle(profile.title || '');
      setInputArea(profile.area || '');
    }
  }, [profile]);

  const handleUpdateProfile = async () => {
    const profileData = {
      name: inputName,
      surname: inputSurname,
      title: inputTitle,
      area: inputArea
    };

    try {
      let response;
      if (profile && profile._id) {
        console.log("Dati inviati:", profileData);
        console.log("URL richiesta:", `/profile/${profile._id}`);
        // Assicurati che l'URL sia corretto (controlla la documentazione dell'API)
        response = await axios.put(`/profile/${profile._id}/`, profileData);
      } else {
        response = await axios.post('/profile', profileData);
      }
      console.log("Risposta del server:", response.data);
      setProfile(prevProfile => ({
        ...prevProfile,
        ...response.data
      }));
      setOpenModal(false);
    } catch (error) {
      console.error("Errore durante l'aggiornamento del profilo:", error);
      if (error.response) {
        console.error("Errore di risposta:", error.response.data);
      } else if (error.request) {
        console.error("Errore nella richiesta:", error.request);
      } else {
        console.error("Errore:", error.message);
      }
    }
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Modifica Profilo</Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-4">
          <div>
            <Label htmlFor="name" value="Nome" />
            <TextInput
              id="name"
              type="text"
              placeholder="Nome"
              required
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="surname" value="Cognome" />
            <TextInput
              id="surname"
              type="text"
              placeholder="Cognome"
              required
              value={inputSurname}
              onChange={(e) => setInputSurname(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="title" value="Titolo" />
            <TextInput
              id="title"
              type="text"
              placeholder="Titolo"
              required
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="area" value="Area" />
            <TextInput
              id="area"
              type="text"
              placeholder="Area"
              required
              value={inputArea}
              onChange={(e) => setInputArea(e.target.value)}
            />
          </div>
        </form>
        <div className="flex justify-end mt-4">
          <Button onClick={handleUpdateProfile} color="success">
            Salva modifiche
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
