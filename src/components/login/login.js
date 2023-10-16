import React from 'react'
import { Link } from 'react-router-dom'
import Mainnav from './mainnav'

const login = () => {
  return (
    <>

    <Mainnav/> 
    <div className='continer-fluid'  style={{backgroundColor:'#000',height:"100vh"}}>
    <div className='row'>
    <div className='col-lg-4'></div>
    <div className='col-lg-4 border border-3 border-warning mt-5 bg-dark bg-opacity-8 ' id='box'>
     <form className=' text-center'>
       <h2 className='text-center'><em className='text-warning'>Spark</em><em className='text-white'>Connect</em></h2>
       <p  className='fs-4' style={{color:"white"}}>Welcome to SparkConnect Community</p>  
       <p className='text-warning'>Email & Phoneno</p>
       <input type="email"
              name='email'
              placeholder='Enter Your Email'
              className='formcontrol '/> 
        
        <p className='text-warning mt-3'>Password*</p>
        
        <input type="password"
               name='pass'
               placeholder='Type the password'
               className='formcontrol  mb-4'/>
         <a className='text-center fpassword '>Forget password*</a>
        
         <div className='btn mt-5'>
         <button className='btn btn-warning'>Login</button>
         <Link to="/Register" ><button className='btn btn-warning'>Register</button></Link>
         </div>      
     </form>   
    </div>

    </div>

    </div>
    
    
    </>
  )
}

export default login