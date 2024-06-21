"use client";
import React from 'react'
import Input from './Input'
import { Dropdown } from 'flowbite-react'
import { Link } from 'react-router-dom';

export default function MyNav({ search, setSearch, handleChange }) {
  return (  
      <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-[1px] fixed w-[100%] z-20 h-12 top-0">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-[52px] mt-1">

          <div className='flex items-center'>
          <Link to='/' >
            <svg xmlns="http://www.w3.org/2000/svg" className='ml-5 mr-1 w-10 h-10 text-[#0a66c2]' viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" focusable="false">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Link>  
            <Input search={search} setSearch={setSearch} handleChange={handleChange}/>
          </div>
          
          <div className=" w-full md:block md:w-auto pr-6" id="navbar-default">
            <ul className="flex justify-center items-center dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              <li>
                <Link to='/' >
                <button className='flex flex-col items-center text-xs w-[80px] text-[#4c4c4c] hover:text-black'>               
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className='text-[#4c4c4c] hover:text-black h-[24px] w-[24px]' focusable="false">
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                  </svg>                                   
                  home
                </button>
                </Link>
              </li>

              <li>
                <button className='flex flex-col items-center w-[80px] text-xs text-[#4c4c4c] hover:text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className='text-[#4c4c4c] hover:text-black h-[24px] w-[24px]' focusable="false">
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>              
                  </svg>
                  Rete                 
                </button>
              </li>

              <li>
                <button className='flex flex-col items-center w-[80px] text-xs text-[#4c4c4c] hover:text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#4c4c4c] hover:text-black">
                  <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                  </svg>
    
                  Lavoro
                </button>
              </li>

              <li>
                <button className='flex flex-col items-center text-xs w-[80px] text-[#4c4c4c] hover:text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className='text-[#4c4c4c] hover:text-black h-[24px] w-[24px]' focusable="false">
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                  </svg>
                      Messaggistica
                </button>
              </li>

              <li>
                <button className='flex flex-col items-center text-xs w-[80px] text-[#4c4c4c] hover:text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className='text-[#4c4c4c] hover:text-black h-[24px] w-[24px]' focusable="false">
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                  </svg>
                  Notifiche
                </button>
              </li>

              <li className='flex flex-col items-center w-[80px] border-r-2'>
                <img src="https://picsum.photos/seed/picsum/200/300" alt="profile_img" className='w-[22px] h-[22px] rounded-xl'/>
                <Dropdown className='rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-none mt-1' label="" dismissOnClick={false} renderTrigger={() => 
                <button className='flex items-center'>
                  <span className='text-xs text-[#4c4c4c]'>Tu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>}>                 
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              </li>

              <li>
                <button className='flex flex-col items-center text-xs w-[80px] pl-8 text-[#4c4c4c] hover:text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                 <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
                <Dropdown className='rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-none mt-1' label="" dismissOnClick={false} renderTrigger={() => 
                <button className='flex items-center'>
                  <span className='text-xs text-nowrap text-[#4c4c4c]  hover:text-black'>Per le aziende</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>}>                 
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                </button>
              </li>

              <li className='w-[150px] text-center flex items-center justify-center pl-8'>
                
                  <p className='text-xs w-[120px] text-center text-[#cfa361] underline-offset-1'>
                    Sblocca 1 mese di Premium
                  </p>
                               
              </li>

            </ul>
          </div>

        </div>

      </nav>
  )
}

