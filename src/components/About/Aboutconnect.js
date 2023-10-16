import React from 'react'
import '../About/Aboutconnect.css'
import NavBar from '../NavBar'
import AboutSideBar from './AboutSideBar'

const Aboutconnect = () => {
  return (
    <>
    <NavBar/>
    <div className="container-fluid bg-dark" style={{backgroundImage:`url("https://wallpaperaccess.com/full/1526041.jpg")`}}>
      <div className="row">
        <div className="col-lg-3"><AboutSideBar/></div>
        <div className='col-lg-5'>
       <h1 className='my-4 text-secondary'>About Connect</h1>
       <p className='my-3 text-light fs-5 fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum ut optio vel eius facilis reiciendis nostrum, similique, laudantium, nemo velit odio aperiam nam sequi ipsa odit blanditiis tempora voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum ut optio vel eius facilis reiciendis nostrum, similique, laudantium, nemo velit odio aperiam nam sequi ipsa odit blanditiis tempora voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum ut optio vel eius facilis reiciendis nostrum, similique, laudantium, nemo velit odio aperiam nam sequi ipsa odit blanditiis tempora voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum ut optio vel eius facilis reiciendis nostrum, similique, laudantium, nemo velit odio aperiam nam sequi ipsa odit blanditiis tempora voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum ut optio vel eius facilis reiciendis nostrum, similique, laudantium, nemo velit odio aperiam nam sequi ipsa odit blanditiis tempora voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum ut optio vel eius facilis reiciendis nostrum, similique, laudantium, nemo velit odio aperiam nam sequi ipsa odit blanditiis tempora voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum ut optio vel eius facilis reiciendis nostrum, similique, laudantium, nemo velit odio aperiam nam sequi ipsa odit blanditiis tempora voluptatum.</p>

    </div>
    <div className='col-lg-4'>
        <img style={{width:'100%',height:'78%', position:'sticky', top:'1vh'  }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhBakp1XWjKLEQh00F87xoCUY7gnB6AH28gamVpcc0bFPo1k7mdjy7MfMi7LzE_gx_y4&usqp=CAU" alt="" />
    </div>
      </div>
    </div>
    </>
  )
}
export default Aboutconnect