import { Label, Modal, Select, TextInput } from 'flowbite-react'
import React from 'react'

export default function Modale() {

    
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
        <span className="rounded-full bg-white h-[25px]"><div  onClick={() => setOpenModal(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M12 4.5v15m7.5-7.5h-15"
                  />
                  </svg>
                </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Aggiungi Esperienza</Modal.Header>
        <Modal.Body>
          
        <form className="flex flex-col gap-4 w-[100%] pb-[20px] border-b-[1px] mb-[15px]">
          <div>
            <div className="block">
              <Label htmlFor="role" value="Competenza*" />
              <TextInput id="role" type="text" placeholder="Competenza (es. React Developer)" required shadow />
            </div>
          </div>

          <div>
            <div className="mb-4 block">
              <Label htmlFor="company" value="Azienda" />
              <TextInput id="role" type="text" placeholder="Competenza (es. React Developer)" required shadow />
            </div>

            <Label htmlFor="date" value="Data di inizio" />
            <div className="mb-4 flex w-[100%]">
            
              <div className="w-[50%] mr-3">
                <Select required>
                  <option>Gennaio</option>
                  <option>Febbraio</option>
                  <option>Marzo</option>
                  <option>Aprile</option>
                  <option>Maggio</option>
                  <option>Giugno</option>
                  <option>Luglio</option>
                  <option>Agosto</option>
                  <option>Settembre</option>
                  <option>Ottobre</option>
                  <option>Novembre</option>
                  <option>Dicembre</option>
                </Select>
              </div>
              <div className="w-[50%]"> 
                <Select required>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                </Select>
              </div>
            </div>

            <Label htmlFor="date" value="Data di fine" />
            <div className="flex w-[100%]">
            
              <div className="w-[50%] mr-3">
                <Select required>
                  <option>Gennaio</option>
                  <option>Febbraio</option>
                  <option>Marzo</option>
                  <option>Aprile</option>
                  <option>Maggio</option>
                  <option>Giugno</option>
                  <option>Luglio</option>
                  <option>Agosto</option>
                  <option>Settembre</option>
                  <option>Ottobre</option>
                  <option>Novembre</option>
                  <option>Dicembre</option>
                </Select>
              </div>
              <div className="w-[50%]"> 
                <Select required>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                </Select>
              </div>
            </div>
            
          </div>
          <div>
              <div className="block">
                <Label htmlFor="description" value="Descrizione" />
              </div>
              <TextInput id="description" type="text" />
          </div>
          <div>
            <div>
              <Label htmlFor="location" value="Luogo" />
            </div>
            <TextInput id="location" type="text" />
          </div>        
      
        </form>
        <div className="flex justify-between">
          <button className="font-semibold text-[#181818] rounded-lg px-5 py-1 hover:bg-[#f4f2ee]" type="submit">Elimina esperienza</button>
          <button className="text-white font-semibold rounded-xl bg-[#0a66c2] w-[10%] px-5 py-1 flex justify-center" type="submit">Salva</button>
        </div>

        </Modal.Body>
        </Modal></span>
    </>
  )
}
