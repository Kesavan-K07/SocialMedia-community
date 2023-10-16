import "../login/Register.css"
import React from 'react'
import Mainnav from "./mainnav"

const Register = () => {
  return (
    <>
    <Mainnav/>
    
    <div className='continear-fluied  box' style={{backgroundColor:"#000"}}>
    <div className='row'>  
    <div className='col-lg-4'></div>
    <div className='col-lg-4  border border-3 border-warning mt-5 bg-dark bg-opacity-8 cont' style={{border:"Warning"}}>
     <form>
      <p className='text-warning mt-3'>Username</p>  
      <input type="Name"
             id='name'
             className='form-control'/>

      <p className='text-warning mt-3'>Register MailID</p>
      <input
           type="email"
           name="email"
           className='form-control'
      />

      <p className='text-warning mt-3'>Phoneno</p>
      <input type="number"
             name="number"
             className='form-control'
    
     />
     
     <p className='text-warning mt-3'>Password</p>
     <input type="password"
           name='pass'
           className='form-control'/>


     <button className='btn btn-outline-warning text-center mt-4 fw-8'>Done</button>
     </form>   

    </div>
    <div className='col-lg-4'></div>

    </div>
    </div>
  
    
    
    
    
    
    </>
  )
}

export default Register