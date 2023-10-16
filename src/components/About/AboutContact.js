import React from 'react'
import "./AboutContact.css"
import NavBar from '../NavBar'
import AboutSideBar from './AboutSideBar'

const AboutContact = () => {
  return (
    <>
    <NavBar/>
    <div className="container-fluid bg-dark" style={{backgroundImage:`url("https://wallpaperaccess.com/full/1526041.jpg")`}}>
      <div className="row">
        <div className="col-lg-3"><AboutSideBar/></div>
        <div className='col-lg-5'>
       <h2 className='my-4 text-white'>Contact Us</h2>
       <p className='my-3 text-secondary fs-5 fw-bold'>+91 9790500889</p>
        <p className='mt-3 text-secondary fs-5 fw-bold'>Sparkconnect.com</p>
        <p className='mt-3 text-secondary fs-5 fw-bold'>42/7 RR Complex</p>
        <p className='mt-3 text-secondary fs-5 fw-bold'>MTP Road,Kaundampalayam,</p>
        <p className='mt-3 text-secondary fs-5 fw-bold'>Coimbatore - 641030</p>
    </div>
    <div className='col-lg-4'>
        <img style={{width:'100%',height:'70%', position:'sticky', top:'1vh'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhBakp1XWjKLEQh00F87xoCUY7gnB6AH28gamVpcc0bFPo1k7mdjy7MfMi7LzE_gx_y4&usqp=CAU" alt="" />
    </div>
      </div>
    </div>
    </>
  )
}
export default AboutContact;