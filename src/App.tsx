import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderMain from './routes/HeaderMain'
import HomePage from './routes/HeaderMain/HomePage'
import ProducsPage from './routes/HeaderMain/ProductsPage'
import ComputersPage from './routes/HeaderMain/ProductsPage/ComputersPage'
import ElectronicsPage from './routes/HeaderMain/ProductsPage/ElectronicsPage'
import BooksPage from './routes/HeaderMain/ProductsPage/BooksPage'
import AboutUsPage from './routes/HeaderMain/AboutUsPage'
import { NotFoundPage } from './routes/HeaderMain/NotFoundPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeaderMain />}>
            <Route index element={<Navigate to='/home' />} />
            <Route path='home' element={<HomePage />}> </Route>
            <Route path='products' element={<ProducsPage />}>
              <Route path='/products/computers' element={<ComputersPage />}></Route>
              <Route path='/products/electronics' element={<ElectronicsPage />}></Route>
              <Route path='/products/books' element={<BooksPage />}></Route>
            </Route>
            <Route path='about-us' element={<AboutUsPage />}> </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
