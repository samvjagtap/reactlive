import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ErrorPage from './components/ErrorPage';
// import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';


function App() {
  const [mode, setMode] = useState('light')
  const [underLineStyle, setUnderLineStyle] = useState('2px solid black')

  const toggleMode = () => {
    
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0d1031'
      document.body.style.color = 'white'

      
      setUnderLineStyle('2px solid white');

      
      // console.log(activeClass);
      // showAlert('Dark Mode has been enabled', 'success')
      // document.getElementById('idMyTextBox').style.backgroundColor = '#413838'
      // document.getElementById('idMyTextBox').style.color = 'white'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      
      setUnderLineStyle('2px solid black');

      // showAlert('Light Mode has been enabled', 'success')
      // console.log(activeClass);
      // document.getElementById('idMyTextBox').style.backgroundColor = 'white'
      // document.getElementById('idMyTextBox').style.color = 'black'
    }
  }
  
  return (
    <>
      <BrowserRouter>
        <Navbar title = 'Sam' mode = {mode} toggleMode = {toggleMode} underLineStyle = {underLineStyle} />
        <Routes>
          <Route path='/about/:name/:lname' element={<About />}></Route>
          <Route path='/' element={
              <div className='container'>
                <TextForm heading = 'Enter Your Text Here' mode = {mode} />
              </div>
            }>
          </Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
