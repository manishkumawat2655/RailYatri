import React, {useState} from 'react'
import Input from './Input';
import ShowTrains from './ShowTrains';
import get_data from './getData';
import { useEffect } from 'react';

function  Book() {

    
    const [coach,setCoach]=useState('Coach');
    const [src,setSrc]=useState('');
    const [dst,setDst]=useState('');
    const [date,setDate]=useState('');
    const [formHide,setFormHide]=useState(false);
    const [ac,setAc]=useState([]);
    const [sleeper,setSleeper]=useState([]);
    const [time,setTime]=useState([]);
    let train=["Hyderabad","Chennai","Banglore","Panji","Pune","Mumbai","Ahmedabad","Jodhpur",
        "Chandigarh","Delhi","Gurgaon","Noida","Kanpur","Lucknow","Patna","Ranchi",
        "Raipur","Kolkata"];

    useEffect(()=>{
        get_data({ac,sleeper,time,train});
        console.log(ac);
    },[]);
    
    const bookTicket=({coach,src,dst,date})=>{
        console.log(coach);
        console.log(src);
        console.log(dst);
        console.log(date);
        setFormHide((prev)=>!prev);
    }
    const submitForm=()=>{
        bookTicket({coach,src,dst,date});
    }

    
    if(!formHide)
    return (

        <div className="bg-black-gradient transparent m-auto mt-0 flex flex-col w-[15rem]  xs:w-[30rem]  border border-gray-900 rounded-lg px-8 py-10">        
                <form className=" flex flex-col justify-center space-y-8 h-auto xs:h-[34rem]">
                <Input coach={coach} src={src} dst={dst} date={date} setSrc={setSrc} setCoach={setCoach} setDate={setDate} setDst={setDst} />
                <button  onClick={submitForm} className="border mt-4 border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold">Search Train</button>
                </form>
        </div>
    )
  else 
  {
    return (
        <ShowTrains coach={coach} src={src} dst={dst} date={date} setSrc={setSrc} setCoach={setCoach} setDate={setDate} setDst={setDst} ac={ac} sleeper={sleeper} time={time} train={train} />
    );
  }
}


export default Book