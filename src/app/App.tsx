import React from 'react';
import './App.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Products } from './components/Products/Products';

const App: React.FC = () => {
  const displayWidth = document.body.clientWidth;

  return (
    <div className="App">
      <Header></Header>
      
      <Products></Products>
      
      <Footer></Footer>
    </div>
  );
}
export default App;
