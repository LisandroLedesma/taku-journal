import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Poema } from './components/poemas/Poema';
import { About } from './components/about/About';
import { Header } from './components/header/Header';

function App() {

  return (
    <div className="App">
    < Header />
    < Navbar />

    <Outlet />

    <Routes>
      <Route path='/' element={ <Poema /> } />
      <Route path='/about' element={ <About /> } />
    </Routes>
    </div>
  )
}

export default App
