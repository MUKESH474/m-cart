import { useState } from "react"
function Log(){
    const[email,setemail]= useState('')
    const[password,setpassword]=useState('')
    const[message,Setmessage]=useState('')
    function submithand(){
        Setmessage('Loading...')
        if( email =="mukesh" && password == "123456"){
            setTimeout(()=>{
                Setmessage('welcome Bro')
            },[3000])
        }
        else{
            setTimeout(()=>{
                Setmessage('Invalid user')
            },[3000])
        }
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email" onChange={(e)=>setemail(e.target.value)} /> <br/>
            <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)} /> <br/>
            <button onClick={submithand} > Submit </button>
            {message && <p>{message}</p>}
        </div>
    )
}
export default Log;