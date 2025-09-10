import React from 'react'
import NavBar from './Bars/navBar/NavBar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage.jsx'
import ViewPage from './Pages/View/ViewPage.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} ></Route>
          <Route path='/view' element={<ViewPage></ViewPage>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App