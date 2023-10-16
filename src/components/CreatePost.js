import React, { useEffect } from 'react'
import Swal from 'sweetalert2'

export default function CreatePost () {
  const AlertMsg =()=>{
    Swal.fire({
      width:'800',
      titleText:'Create post',
      imageUrl:'https://flicpost.com/wp-content/uploads/2023/01/IMG-20210111-WA0000-1.jpg',
      imageHeight:'20vh',
      imageWidth:'20vh',
      input:'text',
      inputPlaceholder:'What do you want to talk about?',
      heightAuto:'true',
      confirmButtonText:'post',
      position:'center'
    })
  }
  return (  
    <>
    <div className='container'>
      <div className="row">
        <button style={{width:'23vh' ,marginTop:'50vh'}} onClick={AlertMsg}>Click Here</button>
      </div>
    </div>
    </>
  )
}

 