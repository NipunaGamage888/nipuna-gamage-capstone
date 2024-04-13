import './App.scss';
import BookNow from './components/BookNow/BookNow';
import Booking from './components/Booking/Booking';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
      
      <Routes>
       <Route path='/'element={<Main/>}/>
       < Route path='/booknow' element={<BookNow/>}/>
       <Route path='/register/:id' element={<Booking/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
