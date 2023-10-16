import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
// import WebDev from './PopularTags/WebDev'
// import Javascript from './PopularTags/Javascript'
// import ReactJs from './PopularTags/ReactJs'

export default function SideBar () {
  return (
    <>
    <div id='sidebar' className="container-fluid">
      <div className="row">
        <div className=' mx-5 '> 
        <h2 className='mx-auto my-1' style={{color:'#FFf'}}>Popular Tags</h2>
        <div>
        <Link style={{textDecoration:'none'}} to='/WebDev'><p id='topic' className='mt-2'># Web Dev</p></Link>

        <Link to='/Javascript' style={{textDecoration:'none'}}><p id='topic'># Javascript</p></Link>

        <Link to='/Python' style={{textDecoration:'none'}}><p id='topic'># Python</p></Link>

        <Link to='/ReactJs' style={{textDecoration:'none'}}><p id='topic'># React js</p></Link>

        <Link to='/Node' style={{textDecoration:'none'}}><p id='topic'># Node js</p></Link>

        <Link to='/Mysql' style={{textDecoration:'none'}}><p id='topic'># Mysql</p></Link>

        <Link to='/ReactNative' style={{textDecoration:'none'}}><p id='topic'># React Native</p></Link>

        <Link to='/Tutorial' style={{textDecoration:'none'}}><p id='topic'># Tutorial</p></Link>

        <div id='SideBar_ad'>
        </div>
          <img style={{ width: 170, height: 170}} src="https://d1aeya7jd2fyco.cloudfront.net/thumbnail/online-full-stack-web-development-certificate.webp" alt="" />
          <p><a style={{textDecoration:'none', color:'red'}} href="">Register Now</a></p>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

 