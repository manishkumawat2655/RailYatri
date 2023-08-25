import React, {useState} from 'react'


function Input({coach,src,dst,date,setSrc,setCoach,setDate,setDst}) {

    const [dropdown,setDropdown]=useState(false);
  return (
    <div className='flex flex-col space-y-8 mt:5 xs:mt-10 justify-between  h-auto xs:h-[34rem]'>
        <div className='flex flex-col justify-between '>
                    <label className="font-bold text-base xs:text-lg text-white " >Source Station</label> 
                    <input type="text" value={src} onChange={(elm)=>setSrc(elm.target.value)} className="border xs:form-child rounded-lg xs:py-3 xs:px-3 bg-black border-indigo-600 placeholder-white-500 text-white text-xl"/>
                </div>
                <div className='flex flex-col justify-between'>
                    <label className="font-bold text-base xs:text-lg text-white " >Destination Station</label> 
                    <input type="text" value={dst} onChange={(elm)=>setDst(elm.target.value)} className="border xs:form-child rounded-lg xs:py-3 xs:px-3 bg-black border-indigo-600 placeholder-white-500 text-white text-xl"/>
                </div>
                <div className='flex flex-col xs:flex-row justify-around'>
                    <div className=' flex flex-col mb-4 xs:mb-0 justify-start'>
                        <label className="font-bold text-lg flex flex-col text-white">Date</label> 
                        <input type="date" value={date} onChange={(elm)=>setDate(elm.target.value)} className="xs:form-child border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"/>
                    </div>
                    <div>
                        <label className="font-bold text-lg flex flex-col text-white " >Coach</label> 
                        
                        <button id="dropdownDefault" onClick={()=>setDropdown((drop)=>!drop)} data-dropdown-toggle="dropdown" className="text-white bg-black-gradient-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{coach}<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdown" className={`${dropdown?'':'hidden'} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
                            <ul onClick={()=>setDropdown((drop)=>!drop)} className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                    <a href="#" onClick={()=>setCoach('AC')} className="text-dimWhite block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AC</a>
                                </li>
                                <li>
                                    <a href="#" onClick={()=>setCoach('Sleeper')} className="text-dimWhite block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sleeper</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
    </div>
  )
}

export default Input