import React from 'react';
import { Route } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import Home from '../components/pages/employee/Home';
import Register from '../components/pages/employee/Register';
import Update from '../components/pages/employee/Update';
import View from '../components/pages/employee/View';

const routing = () => {
  return (
   <>
   <Route path='/' element={<Home />}/>
   <Route path='/add' element={<Register />}/>
   <Route path='/update/:id' element={<Update />}/>
   <Route path='/view/:id' element={<View />}/>
   <Route path='*' element={<PageNotFound />}/>
   </>
  )
}

export default routing