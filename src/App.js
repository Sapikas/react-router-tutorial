import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom"
import {useState} from "react"
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Post from './Pages/Post'
import viewProfile from './components/ViewProfile' 
import editProfile from './components/EditProfile' 

function App() {

  const [login, setLogin] = useState(false);
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <button onClick={()=> setLogin(!login)}>{login?"logout":"login"}</button>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile login={login}/>}/>
          {/* <Route path='viewprofile' element={viewProfile()}/>
          <Route path='editprofile' element={editProfile()}/>
        </Route> */}
        <Route path='/profile/viewprofile' element={viewProfile()}/>
        <Route path='/profile/editprofile' element={editProfile()}/>
        <Route path='/post/:id' element={<Post/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Outlet/> */}
    </>
  );
}

export default App;
