import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Header from '../header/Header'
import { Route,Routes } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
            <Routes>
                <Route path={"/"} element={<Dashboard/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Home