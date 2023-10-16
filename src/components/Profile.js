import React from 'react'
import NavBar from './NavBar'
import './Profile.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEllipsis, faHome, faSearch, faShareSquare, faSquare, faSquarePlus, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/esm/Button';





const Profile = ( showadd) => {
  return (
    <>
      <NavBar />
      <div className="container-fluid" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1526041.jpg")` }}>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-9">
            <div id='containerTop' className='text-light bg-dark'>
              <img id='coverPic' src="https://mdbootstrap.com/img/new/slides/041.webp" />

              <img id='profilePic' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
              <div id='idName' >
                <div id='idLeft'>
                  <p className='fs-3'>Reshmi</p>
                 <p><strong>Reshmi</strong></p>
                 <p><strong>(❁´◡`❁)</strong></p>
                  <em>👶crying on 21 july</em>
                 <p><em>🧭🧭Traveler🏕️🏕️</em></p>
                  <em>if you truly love nature you will find beauty everywhere</em>
                 <p><u>213 friends</u></p>
                </div>
                <div id='AddStoryBtn'>
                      <button className='btn btn-info'>Post</button> 
                </div>
                <div id='EditProfileBtn'>
                  <button className='btn btn-secondary mx-4'>Edit</button>
                </div>
              </div>
            </div>
            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <Card id='over_all' className='bg-dark text-light my-4 p-2'>
              <div className='card_top' style={{ display:'flex', justifyContent: 'space-between' }}>
                <div className='card_top_left' style={{ display:'flex'}}>
                  <div className='profile_pic mt-1'>
                    <img id='card_profile_pic' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name'>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                <button className='btn btn-warning'>Fllow</button>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://cdn.pixabay.com/photo/2023/05/08/08/41/ai-7977962_1280.png" />
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
                  <div className='profile_pic mt-1'>
                    <img id='card_profile_pic' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name '>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                  <button className='btn btn-warning'>Fllow</button>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://mdbootstrap.com/img/new/slides/042.webp"/>
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
                  <div className='profile_pic mt-1'>
                    <img id='card_profile_pic' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name'>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                <button className='btn btn-warning'>Fllow</button>
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
                  <div className='profile_pic mt-1'>
                    <img id='card_profile_pic' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name'>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                <button className='btn btn-warning'>Fllow</button>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://e0.pxfuel.com/wallpapers/766/945/desktop-wallpaper-custom-software-development-graphic-design-computer-program.jpg"/>
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
                  <div className='profile_pic mt-1'>
                    <img id='card_profile_pic' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name'>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                <button className='btn btn-warning'>Fllow</button>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2150394443.jpg?w=740&t=st=1690891762~exp=1690892362~hmac=fa3ec135f46f1de2ef9e4cff3fb0ebbdf1a6251815eafe608a44ba9cd515d1f8"/>
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
                  <div className='profile_pic mt-1'>
                    <img id='card_profile_pic' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name'>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                <button className='btn btn-warning'>Fllow</button>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://img.freepik.com/premium-photo/futuristic-human-robot-artificial-intelligence-concept_398492-8794.jpg"/>
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
                  <div className='profile_pic mt-1'>
                    <img id='card_profile_pic' src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" />
                  </div>
                  <div className='profile_name '>
                    <Card.Title><p id='name'>Reshmi</p></Card.Title>
                    <Card.Text id='postedTime' className='time'>2 days ago</Card.Text>
                  </div>
                </div>
                <div className='card_top_right'>
                <button className='btn btn-warning'>Fllow</button>
                  <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
                </div>
              </div>
              <Card.Text id='content' className=''>
                <span className='text-primary mx-1'></span> Some quick example text.
              </Card.Text>
              <Card.Img id='cardImg' variant="top" src="https://www.tatvasoft.com/blog/wp-content/uploads/2021/03/React-Best-Practices-and-Security-2.jpg"/>
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




          </div>
          <div className="col-lg-2"></div>
        </div>

      </div>
    </>
  );
}
export default Profile