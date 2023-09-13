import React, { useState } from 'react'
import axios from 'axios'
export default function Form() {

    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [number,setnumber] = useState('')

    let submit = async(e)=>{
        e.preventDefault()
        try{
            alert("submitted")
            await axios.post("http://localhost:8000/",{
                name,
                email,
                number
            })
        }catch(e){
            console.log(e);
        }
    }
  return (

    <>
       <div className="container-fluid p-5">
        <div className="contaainer p-5">
            <form action="POST">
                <div className="col-lg-5 bg-dark p-4 mx-auto">
                    <div className="form-group">
                        <input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder='name'/>
                    </div>
                    <div className="form-group">
                        <input type="email" onChange={(e)=>{setemail(e.target.value)}} placeholder='email' />
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={(e)=>{setnumber(e.target.value)}} placeholder='number' />
                    </div>
                    <input type="submit" onClick={submit} className='btn btn-primary'/>
                </div>
            </form>
        </div>
       </div>
    </>
  )
}
