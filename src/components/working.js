import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getDatabase,get,update,set,child,ref,DataSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
// import { initializeApp } from "firebase/app";
// import { getDatabase,get,set,child,ref, DataSnapshot } from "firebase/database";




const working = async ({coach,src,dst,date,setSrc,setCoach,setDate,setDst,ac,sleeper,time,train,arrayOfTrains,setThis,error,setError}) => {

    // TODO: Replace the following with your app's Firebase project configuration
    // See: https://firebase.google.com/docs/web/learn-more#config-object
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

    let pair=[0,0];

    let seat_opp=coach==='AC'?'Sleeper':'Ac';
    coach=coach==='AC'?'Ac':'Sleeper';

    const checkSeat=(x,y,flag)=>{
        if(x==y)
        return 1;
        if(flag=="Ac")
        {
            for(let z=x;z<y;++z)
            {
                if(ac[z]===10)
                return 0;
            }
        }
        else
        {
            for(let z=x;z<y;++z)
            {
                if(sleeper[z]===10)
                return 0;
            }
        }
        return 1;
    }

    const checkStations=(a,b,arr)=>{
        // console.log(arr);
        let p1=a,p2=a,q1,q2;
        for(let i=a;i<=b;++i)
        {
            q1=i;
            for(i;i<=b;++i)
            {
                if(arr[i]!=10)
                {
                    q2=i;
                }
                else
                {
                    break;
                }
            }
        // console.log(q2,q1,p2,p1);
            if(p2-p1<q2+1-q1)
            {
            // console.log("Working");
                p2=q2+1;
                p1=q1;
            }
            // console.log('array=> '+p1+'  '+p2);
        }
        // console.log("Done");
        pair[0]=p1;
        pair[1]=p2;
        if(pair[1]===b+1)
        --pair[1];
    }



    let source_index,destination_index;
    for(let i=0;i<18;++i)
    {
        if(train[i]===src)
        source_index=i;
        else 
        if(train[i]===dst)
        {
            destination_index=i;
            break;
        }
    }
    console.log(source_index,destination_index);

    if(source_index==undefined||destination_index==undefined)
    {
        setError('Wrong Credentials');
        console.log(error);
        return;
    }

    
    checkStations(source_index,destination_index,coach==='Ac'?ac:sleeper);
    
    console.log("pair=>",pair);

    if(!checkSeat(source_index,pair[0],seat_opp)||!checkSeat(pair[1],destination_index,seat_opp))
    {
        alert("Sorry Ticket Not Available");
        location.reload();
    }

    
    if(pair[0]!=source_index&&pair[1]==destination_index)
    {
        let obj={station:train[source_index],time:time[source_index],index:source_index};
        let obj2={seat:seat_opp};
        let obj3={station:train[pair[0]],time:time[pair[0]],index:pair[0]};
        let obj4={seat:coach}
        let obj5={station:train[destination_index],time:time[destination_index],index:destination_index};
        setThis([obj,obj2,obj3,obj4,obj5]);
    }
    if(pair[0]==source_index&&pair[1]!=destination_index)
    {
        let obj={station:train[source_index],time:time[source_index],index:source_index};
        let obj2={seat:coach};
        let obj3={station:train[pair[1]],time:time[pair[1]],index:pair[1]};
        let obj4={seat:seat_opp}
        let obj5={station:train[destination_index],time:time[destination_index],index:destination_index};
        setThis([obj,obj2,obj3,obj4,obj5]);
    }
    if(pair[0]!=source_index&&pair[1]!=destination_index)
    {
        let obj={station:train[source_index],time:time[source_index],index:source_index};
        let obj2={seat:seat_opp};
        let obj3={station:train[pair[0]],time:time[pair[0]],index:pair[0]};
        let obj4={seat:coach}
        let obj5={station:train[pair[1]],time:time[pair[1]],index:pair[1]};
        let obj6={seat:seat_opp}
        let obj7={station:train[destination_index],time:time[destination_index],index:destination_index};
        setThis([obj,obj2,obj3,obj4,obj5,obj6,obj7]);
    }
    if(pair[0]==source_index&&pair[1]==destination_index)
    {
        let obj={station:train[source_index],time:time[source_index],index:source_index};
        let obj2={seat:coach};
        let obj3={station:train[destination_index],time:time[destination_index],index:destination_index};
        setThis([obj,obj2,obj3]);
    }

}

export default working