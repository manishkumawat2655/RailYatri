import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getDatabase,get,update,set,child,ref,DataSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
// import { initializeApp } from "firebase/app";
// import { getDatabase,get,set,child,ref, DataSnapshot } from "firebase/database";

 const data= async ({ac,sleeper,time,train})=>{

    const firebaseConfig = {
        // ...
        // The value of `databaseURL` depends on the location of the database
        databaseURL: "https://practice-33c66-default-rtdb.firebaseio.com/",
    };


    const app = initializeApp(firebaseConfig);
    // Initialize Realtime Database and get a reference to the service
    const db = getDatabase(app);
    const dbref=ref(db);
    
    async function get_data(n,stri){
        return new Promise(async function(resolve,reject) {
            await get(child(dbref,"/2"+"/"+stri+"/")).then((snapshot)=>{
                if(snapshot.exists()){
                    const name=snapshot.val();
                    sleeper[n]=name.Sleeper.BookedSeat;
                    ac[n]=name.Ac.BookedSeat;
                    time[n]=name.Time;
                    resolve(name.Ac.BookedSeat);
                }
                else{
                        resolve(6);
                    }
                }).catch((error)=>{
                    resolve(10);
                }); 
        });
    } 

    for(let i=0;i<train.length;++i)
    {
        await get_data(i,train[i]);
    }
}

export default data 