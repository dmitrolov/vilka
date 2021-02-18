import './mainMenu.scss';
export const MainMenu: React.FC = () => {
    return (
      <div className="mainMenu">
          <div className="productCard">
            <img className='productCard__img' src="productimg/product_1.jpg" alt="product"/>
            <span className='productCard__desc'>
              назва товару тут, марка товару, код товару 
            </span>
            <div className='productCard__estimation'>
              <img className="productCard__svg" src="productimg/star.svg" alt="star"/>
              <a href="#" className='estimation__reviews'>Відгуки</a>
            </div>
            <div className='productCard__wrap'>
              <span className='productCard__priсe'>
                цена в Грівнях
              </span>
              <div className='productCard__chosen'>
                  <a href="#">
                    <img className='productCard__svg' src="productimg/heart.svg" alt="<3"/>
                  </a>
                </div>
                <div className='productCard__basket'>
                  <a href="#">
                    <img className='productCard__svg' src="productimg/basket.svg" alt="telega"/>
                  </a>
                </div>
            </div>
          </div>
      </div>
    );
  }