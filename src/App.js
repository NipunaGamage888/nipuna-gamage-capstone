import './App.scss';
import BookNow from './components/BookNow/BookNow';
import Booking from './components/BookingSec/Booking';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
      
      <Routes>
       <Route path='/'element={<Main/>}/>
       < Route path='/booknow' element={<BookNow/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
