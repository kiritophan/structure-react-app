import React from 'react';
import Banner from './components/Banners/Banner';
import Category from './components/Categorys/Category';
import About from './components/Abouts/About';
import Article from '../../components/Articles/Article';
// import Cart from '../Carts/Cart';

export default function Home() {

  return (
    <div>
      <Banner />
      <Category />
      <About />
      <div className='article-container'>
        <div>
          <h1>
            NEW ARTICLES
          </h1>
        </div>
        <Article />
      </div>
      {/* <Cart /> */}
    </div>
  )
}
