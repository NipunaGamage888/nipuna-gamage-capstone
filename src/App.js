import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
      
      <Routes>
       <Route path='/'element={<Main/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
