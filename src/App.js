import './App.scss';
import BookNow from './components/BookNow/BookNow';
import Booking from './components/Booking/Booking';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Search from './components/SearchSec/Search'
import Login from './components/Login/Login';

function App() {
  return (
    <div>
     <BrowserRouter>
      
      <Routes>
       <Route path='/'element={<Main/>}/>
       < Route path='/booknow' element={<BookNow/>}/>
       <Route path='/register/:id' element={<Booking/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
