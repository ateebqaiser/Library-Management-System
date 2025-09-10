import React from 'react'
import NavBar from './components/navBar/NavBar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/Home/Home.jsx'
import ViewPage from './pages/View/View.jsx'

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} ></Route>
          <Route path='/view' element={<ViewPage></ViewPage>} ></Route>
        </Routes>
      </BrowserRouter> */}

      <ViewPage></ViewPage>

    </>
  )
}

export default App