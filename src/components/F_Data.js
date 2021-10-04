import React,{useState} from 'react'

const F_Data = () => {
    const [userdata,Setuserdata]=useState({
        f_name:"",
        l_name:"",
        age:"",
    });
    let name,value;
    const postData=(event)=>{
        name=event.target.name;
        value=event.target.value;
        Setuserdata({...userdata,[name]:value})
    }
    const save_data=async(event)=>{
        event.preventDefault();
        const {f_name,l_name,age}=userdata;
        if(f_name && l_name && age)
        {
            
            const res=fetch('https://reactfirebasefirstdata-default-rtdb.firebaseio.com/First_Database.json',{method:"POST",headers:{"Content-Type":"application/json"},body: JSON.stringify({f_name,l_name,age})});
            if(res){
                Setuserdata({f_name:"",l_name:"",age:""});
                alert("Data saved");
            }
            else
            {
                Setuserdata({f_name:"",l_name:"",age:""});
                alert("Data Not saved");
            }
        }
        else
        {
            alert("Plz fillup form");
        }
    };
    return (
        <div>
            <lable>FirstName:</lable>
            <input type="text" name="f_name" value={userdata.f_name} onChange={postData}/><br/>
            <lable>LastName:</lable>
            <input type="text" name="l_name" value={userdata.l_name} onChange={postData}/><br/>
            <lable>Age:</lable>
            <input type="number" min="1" max="100" name="age" value={userdata.age} onChange={postData}/><br/>
            <button onClick={save_data} >Submit</button>           
        </div>
    )
}
export default F_Data;
