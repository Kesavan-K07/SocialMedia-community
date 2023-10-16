import React, { useState } from 'react';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Notification'

const Notification = () => {
  const [modal, SetModal] = useState(false);
  const toggleModal = () => {
    SetModal(!modal);
  }
  return (
    <>
      <NavBar />
      <div className='container-fluid'  style={{backgroundImage:`url("https://wallpaperaccess.com/full/1526041.jpg")`}}>
        <div className='row'>
          <div id='left' className='col-lg-3'>
            <button className='btn-modal' onClick={toggleModal}>Click Here</button>

            <div className="modal">
              <div className="overlay"></div>
              <div className="modal-content">
                <h1>hello</h1>
              </div>
            </div>
          </div>

          <div className='col-lg-4'></div>

          <div id='right' className='col-lg-5'>
            
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <Card className='Book1 mt-2 p-1' style={{ width: "100%", marginLeft: "auto", isplay:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                  <Card.Img id='img' style={{width:'8vh', height:'8vh'}} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                  <Card.Text className='mx-3'>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button style={{ height: "5vh" }} variant=""> <i className='fs-6 bi bi-bell'></i></Button>
            </Card>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

          </div>

        </div>


      </div>


    </>
  )
}

export default Notification