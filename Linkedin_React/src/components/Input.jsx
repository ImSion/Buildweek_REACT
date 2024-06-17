export default function Input({search, handleChange}) {

    return (
        <div className='flex items-center justify-center'>
            <input 
                placeholder='Cerca'
                type="text" 
                value={search} 
                onChange={handleChange}
                className='bg-slate-200 rounded-lg py-[10px] px-[15px] focus:outline-none'
            />
      </div>
    )
}