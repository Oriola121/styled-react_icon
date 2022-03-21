import React from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './components/GlobalStyle'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Blog from './components/Blog/Blog'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'antd/dist/antd.css';






function App () {
  return (
      <>
      <Router>
        <GlobalStyle/>
        <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/serve' element = {<Services/>}/>
        <Route path = '/blog' element = {<Blog/>}/>
        </Routes>
        </Router>
      </>
    )
}




export default App