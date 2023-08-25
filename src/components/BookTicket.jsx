import React from 'react'
import Example from './Example'
import set_values from './set_values.js'

const BookTicket=({arrayOfTrains,train,ac,sleeper})=>{


    

    const book=async ()=>{
        for(let i=0;i<arrayOfTrains.length;)
        {
            await set_values(arrayOfTrains[i].index,arrayOfTrains[i+2].index,arrayOfTrains[i+1].seat,train,ac,sleeper);
            i+=3;
        }
        console.log('in book tickets');
    }


  return (
    <div>
        <button onClick={book}  className="mr-3 border mt-4 border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold">
            Book Ticket
        </button>
        <button  onClick={()=>location.reload()} className="ml-3 border mt-4  border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold">
            Home Page
        </button>
        <Example/>
    </div>
  )
}

export default BookTicket