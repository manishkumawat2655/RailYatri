import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getDatabase,get,update,set,child,ref,DataSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
// import { initializeApp } from "firebase/app";
// import { getDatabase,get,set,child,ref, DataSnapshot } from "firebase/database";


 const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://practice-33c66-default-rtdb.firebaseio.com/",
    };

    // let source=document.getElementById('source');
    // let dest=document.getElementById('destination');
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Realtime Database and get a reference to the service
    const db = getDatabase(app);
    const dbref=ref(db);


async  function set_values(x,y,seat_type,train,ac,sleeper){

        return new Promise(async (resolve, reject) => {
            for(let z=x;z<=y;++z)
            {
                let str=train[z];
                if(seat_type==='Ac')
                {
                    update(ref(db,"/2"+"/"+str+"/"+seat_type+"/"),{
                        BookedSeat:ac[z]+1
                    })
                    .then((result)=>{
                        resolve();
                    })
                    .catch((error)=>{
                    });
                }
                else
                {
                    update(ref(db,"/2"+"/"+str+"/"+seat_type+"/"),{
                        BookedSeat:sleeper[z]+1
                    })
                    .then((result)=>{
                        resolve();
                    })
                    .catch((error)=>{
                    });
                }
            }
            console.log('in set values');
        })
    }

    export default set_values