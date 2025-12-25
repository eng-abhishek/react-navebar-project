import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import UserInfo from './Component/UserInfo';
import PageNotFound from './Component/PageNotFound';

function App() {
  return (
    // <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='user-info' element={<UserInfo />}></Route>
        <Route path="*" element={<PageNotFound/>}></Route> 
      </Routes>
    // </div>
  );
}

export default App;
