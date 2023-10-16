import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

const carousel = () => {
  return (
    <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img id='pannel' 
          className="image_carsl d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210310114057/web-development-image.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img id='pannel'
          className="image_carsl d-block w-100"
          src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img id='pannel' 
          className="image_carsl d-block w-100"
          src="https://midriffinfosolution.org/wp-content/uploads/2022/06/Web-Development-1.jpg" alt=''
        />
      </Carousel.Item>
      <Carousel.Item>
        <img id='pannel'
          className="image_carsl d-block w-100"
          src="https://img.freepik.com/premium-vector/programming-code-icon-made-with-binary-code-coding-hacker-matrix-background-with-digits-1-0_127544-1141.jpg?w=2000" alt=''
        />
      </Carousel.Item>
      <Carousel.Item>
        <img id='pannel' 
          className="image_carsl d-block w-100"
          src="https://thumbs.dreamstime.com/z/computer-communication-connection-technology-information-concept-75688770.jpg?w=992" alt=''
        />
      </Carousel.Item>
    
    </Carousel>

    </>
  )
}

export default carousel

