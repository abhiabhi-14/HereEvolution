import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './component/homePage/Home'
import About from './component/aboutPage/About'
import Service from '../src/component/servicePage/Service.jsx'
import ServiceHospitsals from '../src/component/servicePage/ServiceHospitsals.jsx'
import ServiceResturant from '../src/component/servicePage/ServiceRestaurant.jsx'
import ServiceHotels  from '../src/component/servicePage/ServiceHotels.jsx'
import ServiceBasic  from '../src/component/servicePage/ServiceBasic.jsx'
import ServiceNear from '../src/component/servicePage/ServiceNear.jsx'
import Layout from './layout.jsx'
import { RouterProvider, createBrowserRouter , createRoutesFromElements , Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About /> }/>
      <Route path='serviceRestaurant' element={<ServiceResturant /> }/>
      <Route path='serviceHospitals' element={<ServiceHospitsals /> }/>
      <Route path='serviceHotels' element={<ServiceHotels /> }/>
      <Route path='serviceBasic' element={<ServiceBasic /> }/>
      <Route path='serviceNear' element={<ServiceNear /> }/>
      <Route path='service' element={<Service /> }/>
      </Route>
      ))

      ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
      )
