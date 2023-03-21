import { Routes,Route } from 'react-router-dom';
import Index from './pages/index';
import Login from './components/login';
import Signup from './components/signup';
import Dashboad from './pages/dashboard';
import './App.css';

function App() {
  return (
  <>
    <Routes>
      < Route path='' element={<Index />} />
      < Route path='/login' element={<Login />} />
      < Route path='/signup' element={<Signup />} />
      < Route path='/u' element={<Dashboad />} />
    </Routes>
  </>
  );
}

export default App;
