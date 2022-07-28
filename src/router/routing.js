import React from 'react';
import { Route } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import Delete from '../components/pages/employee/Delete';
import Home from '../components/pages/employee/Home';
import Register from '../components/pages/employee/Register';
import Update from '../components/pages/employee/Update';

const routing = () => {
  return (
   <>
   <Route path='/' element={<Home />}/>
   <Route path='/register' element={<Register />}/>
   <Route path='/update' element={<Update />}/>
   <Route path='/delete' element={<Delete />}/>
   <Route path='*' element={<PageNotFound />}/>
   </>
  )
}

export default routing