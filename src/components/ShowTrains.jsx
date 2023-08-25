import React, {useState} from 'react'
import { useEffect } from 'react';
import working from './working.js'
import BookTicket from './BookTicket.jsx';


function ShowTrains({coach,src,dst,date,setSrc,setCoach,setDate,setDst,ac,sleeper,time,train}) {

    const [arrayOfTrains,setThis]=useState([]);
    const [error,setError]=useState('false');
    

    useEffect(()=>{
        console.log(sleeper);
        console.log(ac);
        working({coach,src,dst,date,setSrc,setCoach,setDate,setDst,ac,sleeper,time,train,arrayOfTrains,setThis,error,setError});
    },[]);
    // useEffect(()=>{
    //     if(error!='')
    //     {
    //         alert(error);
    //         location.reload();
    //         return;
    //     }
    // },[error])
    useEffect(()=>{
        console.log(arrayOfTrains);
    },[arrayOfTrains])
    if(error==='true'||1)
  return (


    <div className='h-[40rem] flex flex-col justify-center '>
            <div className='flex flex-1 flex-col md:flex-row bg-black-gradient-2 justify-between md:max-h-[24rem] items-center mx-10 bg-center transparent box-shadow'>
                {/* <div className='flex flex-row items-baseline md:items-center justify-between md:flex-col m-4'>
                    <h1 className='text-gradient'>Jodhpur</h1>
                    <h3 className='ml-6 md:ml-0 md:mt-10'>7:00 AM</h3>
                </div> */}
                {
                    arrayOfTrains.map((train,index)=>{
                        return (
                            <div key={index} className='flex flex-row items-baseline md:items-center justify-between md:flex-col m-4'>
                                <h1 className='text-gradient'>{train.station}</h1>
                                <h1>{train.seat}</h1>
                                <h3 className='ml-6 md:ml-0 md:mt-10'>{train.time}</h3>
                            </div>
                        );
                    })
                }
            </div>
            <BookTicket arrayOfTrains={arrayOfTrains} train={train} ac={ac} sleeper={sleeper}/>
    </div>




    // <div className='h-[40rem] flex flex-col justify-center '>
    //         <div className='flex flex-1 flex-col md:flex-row bg-black-gradient-2 justify-between md:max-h-[24rem] items-center mx-10 bg-center transparent box-shadow'>
    //             <div className='flex flex-row items-baseline md:items-center justify-between md:flex-col m-4'>
    //                 <h1 className='text-gradient'>Jodhpur</h1>
    //                 <h3 className='ml-6 md:ml-0 md:mt-10'>7:00 AM</h3>
    //             </div>
    //             <div>
    //                 <h1>Sleeper</h1>
    //             </div>
    //             <div className='flex flex-row items-baseline  md:items-center justify-between md:flex-col '>
    //                 <h1 className='text-gradient'>Barmer</h1>
    //                 <h3 className='ml-6 md:ml-0 md:mt-10'>11:00 AM</h3>
    //             </div>
    //             <div>
    //                 <h1>1st AC</h1>
    //             </div>
    //             <div className='flex flex-row items-baseline md:items-center justify-between md:flex-col mr-7'>
    //                 <h1 className='text-gradient'>Udaipur</h1>
    //                 <h3 className='ml-6 md:ml-0 md:mt-10'>4:00 PM</h3>
    //             </div>
    //         </div>
    // </div>
  )
  else 
  {
    return <h1>Hello</h1>
  }
}

export default ShowTrains