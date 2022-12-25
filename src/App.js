import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsInfo from './components/GoodsInfo/GoodsInfo';


function App() {
  return (
    <div>
      <Header />
      <Content />
      <Image />
      <h2 style={{'margin-top': '80px'}}>Галерея товарів</h2>
      <GoodsInfo />
    </div>
  );
}

export default App;
