import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Header from '../header/Header'
import { Route,Routes } from 'react-router-dom'

import './Home.css'
import CategoryPage from '../../pages/CategoryPage/CategoryPage'
import ProductPage from '../../pages/ProductPage/ProductPage'
import AddProduct from '../AddProduct/AddProduct'
import AddCategory from '../AddCategory/AddCategory'

const Home = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='rightSidebar'>
            <Routes>
                <Route path={"/"} element={<Dashboard/>}/>
                <Route path={"/create-category"} element={<AddCategory/>}/>
                <Route path={"/all-category"} element={<CategoryPage/>}/>
                <Route path={"/create-product"} element={<AddProduct/>}/>
                <Route path={"/all-products"} element={<ProductPage/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Home