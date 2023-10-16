import React from 'react'
import NavBar from '../NavBar'
import AboutSideBar from './AboutSideBar'

const History = () => {
  return (
    <>
      <NavBar />
      <div id='background' className='container-fluid bg-dark' style={{backgroundImage:`url("https://wallpaperaccess.com/full/1526041.jpg")`}}>
    <div className='row'>
    <div className="col-lg-3"><AboutSideBar/></div>
    <div className='col-lg-5'>
       <h1 id='career' className=' text-white'>History</h1>
       <p className='text-white my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eligendi a quidem ab, amet itaque commodi iste assumenda possimus autem facere impedit quod quasi e5s dolorum inventore. Doloribus natus, rem molestiae ducimus quo accusamus aut incidunt inventore alias velit laborum aliquid amet. Sit consequuntur excepturi nisi ab unde rerum porro hic mollitia, vero in praesentium velit amet, obcaecati, rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Evenietus aut incidunt inventore alias velit laborum aliquid amet. Sit consequuntur excepturi nisi ab unde rerum porro hic mollitia, vero in praesentium velit amet, obcaecati, rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eligendi a quidem ab, amet itaque commodi iste assumenda possimus autem facere impedit quod quasi eos dolorum inventore. Doloribus natus, rem molestiae ducimus quo accusamus aut incidunt inventore alias velit laborum aliquid amet. Sit consequuntur excepturi nisi ab unde rerum porro hic mollitia, vero in praesentium velit amet, obcaecati, rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eligendi a quidem ab, amet itaque commodi iste assumenda possimus autem facere impedit quod quasi eos dolorum inventore. Doloribus natus, rem molestiae ducimus quo accusamus aut incidunt inventore alias velit laborum aliquid amet. Sit consequuntur excepturi nisi ab unde rerum porro hic mollitia, vero in praesentium velit amet, obcaecati, rem </p>
    </div>
    <div className='col-lg-4'>
        <img style={{width:'100%',height:'78%', position:'sticky', top:'1vh'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhBakp1XWjKLEQh00F87xoCUY7gnB6AH28gamVpcc0bFPo1k7mdjy7MfMi7LzE_gx_y4&usqp=CAU" alt="" />
    </div>
    </div>    
    </div>
    </>
  )
}

export default History