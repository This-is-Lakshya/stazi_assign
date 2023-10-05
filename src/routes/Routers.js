import {Routes, Route, Navigate} from 'react-router-dom';
import PropertyDetails from '../pages/PropertyDetails';

const Routers = () => {
    return (
      <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
    )
  }
  
  export default Routers;