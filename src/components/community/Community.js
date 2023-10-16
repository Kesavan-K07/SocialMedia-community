import React from 'react';
import NavBar from '../NavBar';
import ComSideBar from './ComSideBar';
import ComCard from './ComCard'
import 'bootstrap/dist/css/bootstrap.min.css';


const Community = () => {
  return (
    <>
    <NavBar/>
    <div className="container-fluid" style={{backgroundImage:`url("https://wallpaperaccess.com/full/1526041.jpg")`}}>
        <div className="row">
            <div className="col-lg-3">
                <ComSideBar/>
            </div>

            <div className="col-lg-9">
                <ComCard/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Community;