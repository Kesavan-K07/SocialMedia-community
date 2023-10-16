import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import NavBar from './NavBar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1526041.jpg")` }}>
        <div className="row">
          <NavBar />
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <Carousel data-bs-theme="dark">
            
              <Carousel.Item>
                <img id='pannel'
                  className="image_carsl d-block w-100"
                  src="https://cms.jibecdn.com/prod/wipro-global100-program/assets/LP-SKU-A1-1-SLIDER-IMG_1-en-us-1596617444010.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img id='pannel'
                  className="image_carsl d-block w-100"
                  src="https://www.aspirationhosting.com/wp-content/uploads/2019/07/DevFest-1024x490.jpg" alt=''
                />
              </Carousel.Item>
              <Carousel.Item>
                <img id='pannel'
                  className="image_carsl d-block w-100"
                  src="https://www.gatsbyjs.com/_gatsby/image/18180c856231e8d4716f38a5c04b1bad/e85871015a3efb5874b4b6d391cbec19/best-events-2022.jpg?eu=de799c2ad8481c8f708ea6f24012cdd3cca6d8f3b72c5ead12028f6a6f727ec716bfd41c427a4752c72ca167dcbaa5de08efa4892ea37f52fdde8f23c9398489858600715242968e83df32d12ad8e25cd67ab3b469f9752d1dd6c700ce362b2f0d7a0574fb95b5f2246d63fdabf8dead8cb02d6843663c35de384fd3da5c9f9973fa41658863022014e1742dbc789b6c72818662de292f2a41d02ede97fc80a6d55210e48bc6883f9cb3e8382610a3&a=w%3D1200%26h%3D630%26fm%3Djpg%26q%3D75&cd=e092919503070b45b88fe8f828ac3655" alt=''
                />
              </Carousel.Item>
              <Carousel.Item>
                <img id='pannel'
                  className="image_carsl d-block w-100"
                  src="https://img.freepik.com/free-psd/technology-banner-template_23-2148928991.jpg?w=1060&t=st=1691058471~exp=1691059071~hmac=d6903cae53845bea83e7cfd33fa737e94038c91373d34bd09f0b91b5f1f3c091" alt=''
                />
              </Carousel.Item>
              <Carousel.Item className='text-center'>
                <img id='pannel'
                  src="https://www.developerweek.com/NYC/wp-content/uploads/2020/11/dwny_social.jpg" alt=''
                />
              </Carousel.Item>
              <Carousel.Item className='text-center'>
                <img id='pannel'
                  src="https://cms.jibecdn.com/prod/wipro-cohorts/assets/LP-SKU-A1-1-SLIDER-IMG_1-en-us-1596617562718.png" alt=''
                />
              </Carousel.Item>
              <Carousel.Item>
                <img id='pannel'
                  src="https://reinvent.awsevents.com/content/dam/reinvent/2023/media/cards/keynotes/adam.png" alt=''
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-1"></div>
        </div>
        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.*/}
        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.*/}
        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.*/}
        <div className="row my-3">
          <div className="col-lg-1"></div>

          <div className="col-lg-2 col-md-10 col-sm-8">
            <Card className='p-2 my-2 bg-secondary text-light' style={{height:'75vh', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
              <Card.Img id='E_img' variant="top" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/devtron%20_xLEm5Fp.jpg" height={210} />
              <Card.Body>
                <Card.Title>Devtran</Card.Title>
                <Card.Text>
                  Introduction to Modern Application Development
                </Card.Text>
                <Button variant="warning">Book Now</Button>
              </Card.Body>
            </Card>
          </div>
          {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.*/}
          <div className="col-lg-2 col-md-10 col-sm-8">
            <Card className='p-2 my-2 bg-secondary text-light' style={{height:'75vh', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
              <Card.Img id='E_img' variant="top" src="https://www.eventsforgamers.com/wp-content/uploads/2021/10/india-game-developer-conference-2021-1.jpg" height={210} width={120} />
              <Card.Body>
                <Card.Title>E4G Gamers</Card.Title>
                <Card.Text>
                  India Game Developer Conference 2023  online
                </Card.Text>
                <Button variant="warning">Book Now</Button>
              </Card.Body>
            </Card>
          </div>
          {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.*/}

          <div className="col-lg-2 col-md-10 col-sm-8">
            <Card className='p-2 my-2 bg-secondary text-light' style={{ height:'75vh',width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
              <Card.Img id='E_img' variant="top" src="https://images.techhive.com/images/idge/imported/article/nww/2014/01/awsmeetup-100275264-orig.jpg?auto=webp&quality=85,70" height={210} />
              <Card.Body>
                <Card.Title>Amazon</Card.Title>
                <Card.Text>
                  First AWS Meetup in Chennai.Good opportunity,Don't miss it.
                </Card.Text>
                <Button variant="warning">Book Now</Button>
              </Card.Body>
            </Card>
          </div>
          {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.*/}
          <div className="col-lg-2 col-md-10 col-sm-8">
            <Card className='p-2 my-2 bg-secondary text-light' style={{ height:'75vh',width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
              <Card.Img id='E_img' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJEEKElSQUdqaMXvoLJ0mxiSNemKth27Bhw&usqp=CAU" height={210} />
              <Card.Body>
                <Card.Title>Wipro</Card.Title>
                <Card.Text>
                  Virtual experience happening now! Hiring of Persons with Disabilities
                </Card.Text>
                <Button variant="warning">Book Now</Button>
              </Card.Body>
            </Card>
          </div>
          {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.*/}
          <div className="col-lg-2 col-md-10 col-sm-8">
            <Card className='p-2 my-2 bg-secondary text-light' style={{ height:'75vh',width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
              <Card.Img id='E_img' variant="top" src="https://i.ytimg.com/vi/v37qR5RX98c/maxresdefault.jpg" height={210} />
              <Card.Body>
                <Card.Title>Cognizant</Card.Title>
                <Card.Text>
                  Introduction to Modern Application Development
                </Card.Text>
                <Button variant="warning"><a href="https://devtron.ai/"></a> Book Now</Button>
              </Card.Body>
            </Card>
          </div>
          {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.*/}
          <div className="col-lg-1"></div>
        </div>
      </div>
    </>
  )
}

