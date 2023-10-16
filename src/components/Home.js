import React from 'react'
import './Home.css'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Status from './Status'
import Carousel from './Carousel'
import Post from './Post'
// import CreatePost from './CreatePost'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faSquare, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

export default function Home() {
  const AlertMsg =()=>{
    Swal.fire({
      width:'800',
      titleText:'Create post',
      imageUrl:'https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec',
      imageHeight:'10vh',
      imageWidth:'10vh',
      heightAuto:'100',
      confirmButtonText:'post',
      position:'center',
      input:'text',
      inputPlaceholder:'What do you want to talk about?',
      input:'textarea',
    })
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{backgroundImage:`url("https://wallpaperaccess.com/full/1526041.jpg")`}}>
          <div id='NavBar' className='bg-dark'>
          <NavBar/>
          </div>
        
          {/* >>>>>>>>>>>>>>>>>>>>>>>>>> SIDE BAR >>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div id='SideBar' className="col-lg-3" >
            <SideBar/>
          </div>

          <div className="col-lg-9 col-md-12 col-sm-12">
          {/* >>>>>>>>>>>>>>>>>>>>>>>>>> SEARCH BAR >>>>>>>>>>>>>>>>>>>>>>>>>>> */}

          <div id='search_div' className='my-4 mx-2'>
            <Link to='/Profile'>
            <img id='search_img' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="profile pic"/> 
            </Link>
          
          <input id='search_bar' className='mx-3' type="text"/>
          <button id='search_btn' className='btn btn-warning'><lable>Search</lable></button>

          <Link to=''>
          <FontAwesomeIcon onClick={AlertMsg} id='addBtn' className='text-light' icon={faSquarePlus}/>  
          </Link>
          </div>

        {/*>>>>>>>>>>>>>>>>>>>>>>>>>> STATUS BAR >>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

            <div id='Status' className="my-3">
              <Status/>
            </div>
        {/*>>>>>>>>>>>>>>>>>>>>>>>>>> CAROUSEL BAR >>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
        
        <div style={{'border':'solid 1px gray' }}>
          <Carousel/>
        </div>

        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>> post >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        <div className='my-4'>
          <Post/>
        </div>


          </div>

          <div className="col-lg-1"></div>
        </div>
      </div>

    </>
  )
}

