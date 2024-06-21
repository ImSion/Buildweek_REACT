export default function Input({search, handleChange}) {

    return (
        <div className='flex items-center justify-center focus:border-[10px]'>

            <div className="bg-[#edf3f8] flex items-center rounded-sm ">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 absolute top-[17.5px] left-[125px] z-10">
                     <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg> 
                
                
    
                <input 
                    placeholder='Cerca' 
                    type="text" 
                    value={search} 
                    onChange={handleChange}
                    className='bg-[#edf3f8] rounded-sm py-[10px] px-[30px] focus:border-red-500 h-[34px] border-[#edf3f8] relative'
                />
           </div> 
      </div>
    )
}