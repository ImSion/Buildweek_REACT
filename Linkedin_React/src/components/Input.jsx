import React, { useState } from 'react';

export default function Input({search, handleChange}) {

    const [isFocused, setIsFocused] = useState(false);
      
    return (


        
        <div className='flex items-center justify-center'>

            <div className="bg-[#edf3f8] flex items-center rounded-s-sm h-[34px] relative">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 absolute left-[10px] top-[9px]">
                     <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg> 
            </div>     
                
    
                <input 
                    placeholder='Cerca' 
                    type="text" 
                    value={search} 
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`transition-width duration-300 ease-in-out ${
                        isFocused ? 'w-[360px] ' : 'w-[280px]'
                      } bg-[#edf3f8] rounded-sm py-[10px] px-[30px] h-[34px] border-[#edf3f8]`}
                    
                />
           
      </div>
    )
}