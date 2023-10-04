import {Routes, Route, Navigate} from 'react-router-dom';
import App from '../App';
import PropertyDetails from '../pages/PropertyDetails';

const Routers = () => {
    return (
      <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<App />} />

          <Route path='/property' element={<PropertyDetails />} />
      </Routes>
    )
  }
  
  export default Routers