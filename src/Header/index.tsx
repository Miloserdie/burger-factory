import burgerTitle from '../assets/burger-title.png'
import './style.scss';
import {useState} from "react";
const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const activeMenu = isMenuActive ? 'active' : '';

    const handleBurgerBtnClick = () => {
        setIsMenuActive(prevState => !prevState);
    }

    return (
        <header className={'header'}>
            <div className={'header__container container'}>
                <div className={'header__left'}>
                    <button onClick={handleBurgerBtnClick} className={'header__burger-btn'}>
                        <span />
                    </button>
                    <img className={`header__title-img ${activeMenu}`} src={burgerTitle} alt="burger-title"/>
                </div>
                <nav onClick={handleBurgerBtnClick} className={`header__navigation-bar ${activeMenu}`}>
                    <ul className={activeMenu}>
                        <li><a href="#">INGREDIENT</a></li>
                        <li><a href="#">STORY</a></li>
                        <li><a href="#">BURGERS</a></li>
                        <li><a href="#">LOCATION</a></li>
                    </ul>
                </nav>
                <a className={'header__link'} href="#">Order now</a>
            </div>
        </header>
    );
};

export default Header;