import { useState } from 'react';

function Sigin(){
    const[email,setemail]= useState(' ')
    const[password,setpassword]=useState(' ')
    const[message,Setmessage]=useState('')
    function submithand(){
        Setmessage('Loading...')
        if( email =="mukesh" && password == "123456"){
            setTimeout(()=>{
                Setmessage('welcome to M')
            },[1000])
        }
        else{
            setTimeout(()=>{
                Setmessage('Check your uers namr or password')
            },[1000])
        }
    }
    return(
        <div className='sigintag'>
            <h1>Login</h1>
            <input type="text" placeholder="User Name :mukesh " className='email' onChange={(e)=>setemail(e.target.value)} /> <br/>
            <input type="password" placeholder="password:123456" className='password' onChange={(e)=>setpassword(e.target.value)} /> <br/>
            <button onClick={submithand} className='sininbutton' > Submit </button>
            {message && <p style={{color:"white"}}>{message}</p>}
        </div>
    )
}
export default Sigin