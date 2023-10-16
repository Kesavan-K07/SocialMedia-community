import React from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import AboutSideBar from './AboutSideBar'
import Career from './Career'


const About = () => {
  return (
    <>
      <NavBar />
      <div className='container-fluid bg-dark' style={{backgroundImage:`url("https://wallpaperaccess.com/full/1526041.jpg")`}}>
        <div className='row'>
            <div className='col-lg-3'><AboutSideBar/></div>
            <div className="col-lg-9"><Career/></div>
        </div>
      </div>
    </> 
  )
}

export default About