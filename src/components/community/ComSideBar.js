import React from 'react'
import { Link } from 'react-router-dom'
const ComSideBar = () => {
  return (
    <>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12'>
            <a className='text-decoration-none text-white d-flex align-itemcenter mt-5'>
              <i className='fs-4 bi bi-globe'></i>
              <span className='mx-3 fs-4'>Manage My NetWork</span>
            </a>
            <hr className='text-secondary' />

            <div className='mx-3'>

              <div className='my-2'>
              <i className='bi bi-book fs-3 text-warning'></i>
                  <Link style={{ textDecoration: 'none' }} to='/Contact'><span className='mx-4 fs-4 text-light'>Contact</span></Link>
              </div>

              <div className='my-2'>
              <i className='bi bi-grid fs-3 text-warning'></i>
                  <Link style={{ textDecoration: 'none' }} to='/Following'><span className='mx-4 fs-4 text-light'>Following</span></Link>
              </div>

              <div className='my-2'>
              <i className='bi bi-people fs-3 text-warning'></i>
                  <Link style={{ textDecoration: 'none' }} to='/Followers'><span className='mx-4 fs-4 text-light'>Followers</span></Link>
              </div>

              <div className='my-2'>
              <i className='bi bi-table fs-3 text-warning'></i>
                  <Link style={{ textDecoration: 'none' }} to='/FriendRequests'><span className='mx-4 fs-4 text-light'>Friend Requests</span></Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ComSideBar