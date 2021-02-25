import './search.scss';
import {displayWidth} from './../../App';

export const Search: React.FC = () => {
    return (
      <div className="search">
        <img className="search__loupe" src="img/search/loupe.png" alt="loupe"/>
        <input className="search__input" placeholder="I search..." type="text"/>
        {displayWidth >= 768 && <button className="search__button"> Search </button>}
      </div>
    );
  }

