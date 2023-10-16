import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import About from './components/About';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import Events from './components/Events';
import Community from './components/community/Community';
import Contact from './components/community/Contact';
import Following from './components/community/Following';
import Followers from './components/community/Followers';
import FriendRequests from './components/community/FriendRequests';
import Notification from './components/Notification';
import About from './components/About/About'
import Aboutconnect from './components/About/Aboutconnect';
import History from './components/About/History';
import AboutContact from './components/About/AboutContact';
import Termsandcondition from './components/About/Termsandcondition';
import Profile from './components/Profile';
import Login from './components/login/login.js';
import "../src/components/main.css"
import Register from './components/login/Register';
import Mainnav from './components/login/mainnav';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  {/* <Route path='' element={<Login/>}/>
  <Route path='/Register' element={<Register/>}/>
  <Route path='' element={<Mainnav/>}/> */}
  <Route path='/' element={<Home/>}/> 
  <Route path='/Home' element={<Home/>}/>
  <Route path='/Community' element={<Community/>}/>
  <Route path='/CreatePost' element={<CreatePost/>}/>

  
  <Route path='/Events' element={<Events/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Following' element={<Following/>}/>
  <Route path='/Followers' element={<Followers/>}/>
  <Route path='/FriendRequests' element={<FriendRequests/>}/>
  <Route path='/Notification' element={<Notification/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Aboutconnect' element={<Aboutconnect/>}/>
  <Route path='/History' element={<History/>}/>
  <Route path='/AboutContact' element={<AboutContact/>}/>\
  <Route path='/Termsandcondition' element={<Termsandcondition/>}/>
  <Route path='/Profile' element={<Profile />}
  />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
