import './App.scss'
import { Routes, Route } from 'react-router-dom'
import LazyLoad from './LazyLoad'
import Navbar from '@components/Navbars/Navbar'
import Footer from './components/Footers/Footer';
// import Article from './components/Articles/Article';

function App() {
  return (
    <div className="App">
      <div className='nav-container'>
        <div className="nav-contents">
          <Navbar></Navbar>
        </div>
      </div>
      <div className='app_container'>

        {/* Content Router */}
        <Routes>
          <Route path="" element={LazyLoad(() => import("@pages/Homes/Home"))()} />
          <Route path="register" element={LazyLoad(() => import("@pages/Registers/Register"))()} />
          <Route path="login" element={LazyLoad(() => import("@pages/Logins/Login"))()} />
          <Route path="cart" element={LazyLoad(() => import("@pages/Carts/Cart"))()} />
          <Route path="search" element={LazyLoad(() => import("@components/Searchs/SearchModal"))()} />
          <Route path="contact" element={LazyLoad(() => import("@components/Footers/Contacts/Contact"))()} />
          <Route path='product/:id' element={LazyLoad(() => import("@pages/Modals/CartModal"))()} />
          <Route path='mycart' element={LazyLoad(() => import("@pages/Modals/MyCarts/MyCart"))()} />
          <Route path="menu/:type" element={LazyLoad(() => import("@pages/Menus/Menu"))()} />
        </Routes>
      </div>
      <div className='footer-container'>
        <div className="footer-contents">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
