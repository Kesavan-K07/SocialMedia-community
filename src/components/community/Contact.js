import React from 'react'
import NavBar from '../NavBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ComSideBar from './ComSideBar';
import "bootstrap-icons/font/bootstrap-icons.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis,faSearch } from '@fortawesome/free-solid-svg-icons'
import '@fontsource/public-sans';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';



const Contact = () => {
  return (
    <>
      <NavBar />


      <div className='container-fluid ' style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1526041.jpg")` }}>
        <div className='row'>
          <div className="col-lg-3">
          <ComSideBar/>
          </div>
          <div className='col-lg-9 bg-dark' style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1526041.jpg")` }}>

<div className='container-fluid bg-dark' style={{backgroundImage:`url("https://wallpaperaccess.com/full/1526041.jpg")`}}>
        <div className='row my-3'>
            <div className='my-2' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <FontAwesomeIcon className='text-primary fs-3 my-1 mx-2' icon={faSearch} />
              <input style={{ width: '90%' }} className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
      </div>
          <div className='row mt-3'>
            <div className='col-lg-3 col-md-4 col-sm-10 my-3'>
              {/* ------------------------------------------card1--------------------------------------- */}
              <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-4' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                <Card.Body>
                  <Card.Title className='text-center'>Yogeshprabhu</Card.Title>
                  
                  <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                  <Button className='mx-4 mt-2' variant="primary">Unfollow</Button>
                  <Button className='mx-4 mt-2' variant="primary">DisConnect</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* ------------------------------------------card2--------------------------------------- */}

            <div className='col-lg-3 col-md-4 col-sm-10  my-3'>
            <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-4' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                <Card.Body>
                  <Card.Title className='text-center'>Yogeshprabhu</Card.Title>
                  
                  <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                  <Button className='mx-4 mt-2' variant="primary">Unfollow</Button>
                  <Button className='mx-4 mt-2' variant="primary">DisConnect</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* ------------------------------------------card3--------------------------------------- */}

            <div className='col-lg-3 col-md-4 col-sm-10 my-3'>
            <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-4' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                <Card.Body>
                  <Card.Title className='text-center'>Yogeshprabhu</Card.Title>
                  
                  <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                  <Button className='mx-4 mt-2' variant="primary">Unfollow</Button>
                  <Button className='mx-4 mt-2' variant="primary">DisConnect</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* ------------------------------------------card4--------------------------------------- */}

            <div className='col-lg-3 col-md-4 col-sm-10 my-3'>

            <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-4' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                <Card.Body>
                  <Card.Title className='text-center'>Yogeshprabhu</Card.Title>
                  
                  <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                  <Button className='mx-4 mt-2' variant="primary">Unfollow</Button>
                  <Button className='mx-4 mt-2' variant="primary">DisConnect</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* ------------------------------------------card5--------------------------------------- */}


            <div className='col-lg-3 col-md-4 col-sm-10 my-3'>

            <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-4' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                <Card.Body>
                  <Card.Title className='text-center'>Yogeshprabhu</Card.Title>
                  
                  <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                  <Button className='mx-4 mt-2' variant="primary">Unfollow</Button>
                  <Button className='mx-4 mt-2' variant="primary">DisConnect</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* ------------------------------------------card6--------------------------------------- */}

            <div className='col-lg-3 col-md-4 col-sm-10  my-3'>

            <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-4' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                <Card.Body>
                  <Card.Title className='text-center'>Yogeshprabhu</Card.Title>
                  
                  <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                  <Button className='mx-4 mt-2' variant="primary">Unfollow</Button>
                  <Button className='mx-4 mt-2' variant="primary">DisConnect</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* ----------------------------------------card7--------------------------------------- */}
            <div className='col-lg-3 col-md-4 col-sm-10  my-3'>

            <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-4' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                <Card.Body>
                  <Card.Title className='text-center'>Yogeshprabhu</Card.Title>
                  
                  <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                  <Button className='mx-4 mt-2' variant="primary">Unfollow</Button>
                  <Button className='mx-4 mt-2' variant="primary">DisConnect</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* ----------------------------------------card8--------------------------------------- */}

            <div className='col-lg-3 col-md-4 col-sm-10  my-3'>

            <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-4' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                <Card.Body>
                  <Card.Title className='text-center'>Yogeshprabhu</Card.Title>
                  
                  <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                  <Button className='mx-4 mt-2' variant="primary">Unfollow</Button>
                  <Button className='mx-4 mt-2' variant="primary">DisConnect</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
      </div>




          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
