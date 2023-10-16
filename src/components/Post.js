import React from 'react'
import './Post.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEllipsis, faHome, faSearch, faShareSquare, faSquare, faSquarePlus, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Post = () => {
  return (
    <>
            <Card id='over_all' className='bg-dark text-light my-4 p-2'>
              <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='card_top_left' style={{ display: 'flex' }}>
                  <div className='profile_pic'>
                    <img id='card_profile_pic' className='mt-3' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name '>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://hookagency.com/wp-content/uploads/2021/10/do-it-cheaper-700x538.jpg" />
              <Card.Body>
                <div id='reactions' className=''>
                  <div className='rections_left'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
                    <p>1.5k</p>
                  </div>
                  <div className='rections_right'>
                    <p>245 Discussions</p>
                  </div>
                </div>
                <div id='react' className='react' >
                  <div className='post_react' >
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
                    <p className='my-auto'>Like</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
                    <p className='my-auto'>dislike</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
                    <p className='my-auto'>discussion</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Card id='over_all' className='bg-dark text-light my-4 p-2'>
              <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='card_top_left' style={{ display: 'flex' }}>
                  <div className='profile_pic'>
                    <img id='card_profile_pic'className='mt-3' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name mx-3'>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://pbs.twimg.com/media/Cpwoac3UMAAd3Ax.jpg"/>
              <Card.Body>
                <div id='reactions' className=''>
                  <div className='rections_left'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
                    <p>1.5k</p>
                  </div>
                  <div className='rections_right'>
                    <p>245 Discussions</p>
                  </div>
                </div>
                <div id='react' className='react' >
                  <div className='post_react' >
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
                    <p className='my-auto'>Like</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
                    <p className='my-auto'>dislike</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
                    <p className='my-auto'>discussion</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Card id='over_all' className='bg-dark text-light my-4 p-2'>
              <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='card_top_left' style={{ display: 'flex' }}>
                  <div className='profile_pic'>
                    <img id='card_profile_pic' className='mt-3' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name mx-3'>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/603ec500edb451589534eeb0_81YmKOYspf0R4L_mtVjwghgdnMznvWbvXNA3X4WjNrydSA3_UFdZtt_I5PRc7iYWrgTQRZlgrHjqMimDv0Nugx_pAUQyywbMwKYq_OOM-TkS36qqGNiaWSVRR5JKYyVrOqNIBubP.jpeg"/>
              <Card.Body>
                <div id='reactions' className=''>
                  <div className='rections_left'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
                    <p>1.5k</p>
                  </div>
                  <div className='rections_right'>
                    <p>245 Discussions</p>
                  </div>
                </div>
                <div id='react' className='react' >
                  <div className='post_react' >
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
                    <p className='my-auto'>Like</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
                    <p className='my-auto'>dislike</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
                    <p className='my-auto'>discussion</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Card id='over_all' className='bg-dark text-light my-4 p-2'>
              <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='card_top_left' style={{ display: 'flex' }}>
                  <div className='profile_pic'>
                    <img id='card_profile_pic' className='mt-3' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name mx-3'>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/603ec5023c4ad8fde1783428_Ij2FnlaQX3wZEqCdfWmynR3kTFRlelaf-BXa21868XGfGWQiBv5FISkffcRaUhXrgoKiMX9FiLDGZ2jxwKGdt_vTyGUVHlqcm9uMjUBNQRgltzfgD3TulNwNixxWI2R3ay9vcAc7.jpeg"/>
              <Card.Body>
                <div id='reactions' className=''>
                  <div className='rections_left'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
                    <p>1.5k</p>
                  </div>
                  <div className='rections_right'>
                    <p>245 Discussions</p>
                  </div>
                </div>
                <div id='react' className='react'>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
                    <p className='my-auto'>Like</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
                    <p className='my-auto'>dislike</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
                    <p className='my-auto'>discussion</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Card id='over_all' className='bg-dark text-light my-4 p-2'>
              <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='card_top_left' style={{ display: 'flex' }}>
                  <div className='profile_pic'>
                    <img id='card_profile_pic' className='mt-3' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name mx-3'>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/603ec5003c4ad84a74783242_Quke726ojvKe9_-8p6r2JO2lLz0dyGqyCCITiIc6vm21JPkjsqvUjaNsUTNRgjo_TQbzJPNDOuwcLeUDpkv7bsIRw_Qb-Q3v4U-NLeo-CWairdyxxmEurw3vH5wVRoWhkoNww177.jpeg"/>
              <Card.Body>
                <div id='reactions' className=''>
                  <div className='rections_left'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
                    <p>1.5k</p>
                  </div>
                  <div className='rections_right'>
                    <p>245 Discussions</p>
                  </div>
                </div>
                <div id='react' className='react' >
                  <div className='post_react' >
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
                    <p className='my-auto'>Like</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
                    <p className='my-auto'>dislike</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
                    <p className='my-auto'>discussion</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Card id='over_all' className='bg-dark text-light my-4 p-2'>
              <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='card_top_left' style={{ display: 'flex' }}>
                  <div className='profile_pic'>
                    <img id='card_profile_pic' className='mt-3' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name mx-3'>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://i.pinimg.com/736x/9b/fe/f0/9bfef0c0bb3a3cf817872aacf209667f--website-analysis-free-website.jpg"/>
              <Card.Body>
                <div id='reactions' className=''>
                  <div className='rections_left'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
                    <p>1.5k</p>
                  </div>
                  <div className='rections_right'>
                    <p>245 Discussions</p>
                  </div>
                </div>
                <div id='react' className='react' >
                  <div className='post_react' >
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
                    <p className='my-auto'>Like</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
                    <p className='my-auto'>dislike</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
                    <p className='my-auto'>discussion</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Card id='over_all' className='bg-dark text-light my-4 p-2'>
              <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='card_top_left' style={{ display: 'flex' }}>
                  <div className='profile_pic'>
                    <img id='card_profile_pic' className='mt-3' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name mx-3'>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://i.ytimg.com/vi/g_Y9ZV-y3bM/maxresdefault.jpg"/>
              <Card.Body>
                <div id='reactions' className=''>
                  <div className='rections_left'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
                    <p>1.5k</p>
                  </div>
                  <div className='rections_right'>
                    <p>245 Discussions</p>
                  </div>
                </div>
                <div id='react' className='react' >
                  <div className='post_react' >
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
                    <p className='my-auto'>Like</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
                    <p className='my-auto'>dislike</p>
                  </div>
                  <div className='post_react'>
                    <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
                    <p className='my-auto'>discussion</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

      {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}





    </>







  )
}

export default Post