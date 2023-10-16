import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faSquare, faSquarePlus } from '@fortawesome/free-solid-svg-icons'



const ComCard = () => {
  return (
    <>
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
                <Card.Img className='ms-5 mt-2' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyzI3C8-JdRTrl8ptNx_vku5CQtUv6Y9ICa1wrAYpTwhg7pI10dyiih4v7mYsjKsaZSY0BDwNxrMqA31Q" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to  and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button className='ms-5' variant="primary">Connect</Button>
                </Card.Body>
              </Card>
            </div>
            {/* ------------------------------------------card2--------------------------------------- */}

            <div className='col-lg-3 col-md-4 col-sm-10  my-3'>
              <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-2' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://tse3.mm.bing.net/th?id=OIP.m896uqlbmplMRbnAqLnzkgHaHQ&pid=Api&P=0&h=180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button className='ms-5' variant="primary">Connect</Button>
                </Card.Body>
              </Card>
            </div>
            {/* ------------------------------------------card3--------------------------------------- */}

            <div className='col-lg-3 col-md-4 col-sm-10 my-3'>
              <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-2' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://tse3.mm.bing.net/th?id=OIP.oT7YCmlYXmPsxCBFOwQRdwHaEi&pid=Api&P=0&h=180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button className='ms-5' variant="primary">Connect</Button>
                </Card.Body>
              </Card>
            </div>
            {/* ------------------------------------------card4--------------------------------------- */}

            <div className='col-lg-3 col-md-4 col-sm-10 my-3'>

              <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-2' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://tse2.mm.bing.net/th?id=OIP.rzGeymEByDCI_1FmOHfsSAHaNK&pid=Api&P=0&h=180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button className='ms-5' variant="primary">Connect</Button>
                </Card.Body>
              </Card>
            </div>
            {/* ------------------------------------------card5--------------------------------------- */}


            <div className='col-lg-3 col-md-4 col-sm-10 my-3'>

              <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-2' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://tse1.mm.bing.net/th?id=OIP.FDxiYHXYv1pNUVSsYE94ggAAAA&pid=Api&P=0&h=180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button className='ms-5' variant="primary">Connect</Button>
                </Card.Body>
              </Card>
            </div>
            {/* ------------------------------------------card6--------------------------------------- */}

            <div className='col-lg-3 col-md-4 col-sm-10  my-3'>

              <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-2' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://tse3.mm.bing.net/th?id=OIP.vYguDcuoPTQTLN0HeFWXSgHaFj&pid=Api&P=0&h=180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button className='ms-5' variant="primary">Connect</Button>
                </Card.Body>
              </Card>
            </div>
            {/* ----------------------------------------card7--------------------------------------- */}
            <div className='col-lg-3 col-md-4 col-sm-10  my-3'>

              <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-2' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://tse3.mm.bing.net/th?id=OIP.KaVzRDAcdPnjsOapKYs52QHaE8&pid=Api&P=0&h=180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example  up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button className='ms-5' variant="primary">Connect</Button>
                </Card.Body>
              </Card>
            </div>
            {/* ----------------------------------------card8--------------------------------------- */}

            <div className='col-lg-3 col-md-4 col-sm-10  my-3'>

              <Card className='ms-2' style={{ width: '14rem',marginLeft:'auto',marginRight:'auto' }}>
                <Card.Img className='ms-5 mt-2' variant="top" style={{ height: "15vh", borderRadius: "65%", width: "15vh" }} src="https://tse2.mm.bing.net/th?id=OIP.3axaR3yArnrW5iZsFMsB0AHaJM&pid=Api&P=0&h=180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button className='ms-5' variant="primary">Connect</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
      </div>
    </>
  )
}

export default ComCard