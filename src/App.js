import './App.scss';
import BookNow from './components/BookNow/BookNow';
import Booking from './components/Booking/Booking';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import checkOutCancel from './components/CheckoutCancel/CheckoutCancel'
import CheckoutSuccess from './components/CheckoutSuccess/CheckoutSuccess';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Payment from './components/Payment/Payment';
import Loyalty from './components/Loyalty/Loyalty';

function App() {
  return (
    <div>

     <BrowserRouter>
      <Header/>
      <Routes>
       <Route path='/'element={<Main/>}/>
       <Route path='/booknow' element={<BookNow/>}/>
       <Route path='/register/:id' element={<Booking/>}/>
       <Route path='/success' element={<CheckoutSuccess/>}/>
       <Route path='/cancel' element={<checkOutCancel/>}/>
       <Route path='/loyalty' element={<Loyalty/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
