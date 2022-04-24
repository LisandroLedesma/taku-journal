import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Poemas } from './components/poemas/Poemas';
import { About } from './components/about/About';
import { Header } from './components/header/Header';

function App() {

  return (
    <div className="App">
    < Header />
    < Navbar />

    <Outlet />

    <Routes>
      <Route path='/' element={ <Poemas /> } />
      <Route path='/about' element={ <About /> } />
    </Routes>
    </div>
  )
}

export default App
