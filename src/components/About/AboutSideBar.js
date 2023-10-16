import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

export default function AboutSideBar () {
  return (
    <>
      <div className='container-fluid' style={{height:'100%', paddingTop:'2vh'}}>
        <div className='row'>
          <div className='col-lg-12 mx-2'>

            <div className=''>
              <div className=''>
              <i style={{fontSize:'3vh'}} class="bi bi-briefcase fs-3 text-warning"></i>
                  <Link style={{ textDecoration:'none'}} to='/About'><span className='mx-4 fs-4 text-light'>Careers</span></Link>
              </div>
              <div>
              <i style={{fontSize:'3vh'}} class="bi bi-file-earmark-person fs-3 text-warning"></i>
                  <Link style={{ textDecoration: 'none' }} to='/Aboutconnect'><span className='mx-4 fs-4 text-light'>About Us</span></Link>
              </div>
              <div>
              <i class="bi bi-book fs-3 text-warning"></i>
                  <Link style={{ textDecoration: 'none' }} to='/History'><span className='mx-4 fs-4 text-light'>History</span></Link>
              </div>
              <div>
              <i class="bi bi-person-rolodex fs-3 text-warning"></i>
                  <Link style={{ textDecoration: 'none' }} to='/AboutContact'><span className='mx-4 fs-4 text-light'>Contact</span></Link>
              </div>
              <div>
              <i class="bi bi-info-circle fs-3 text-warning"></i>
                  <Link style={{ textDecoration: 'none' }} to='/Termsandcondition'><span className='mx-4 fs-4  text-light'>Terms & Conditions</span></Link>
              </div>
            </div>
         </div>
        </div>
      </div>
    </>
  )
}

 