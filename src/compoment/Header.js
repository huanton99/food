import { Fragment } from 'react';

import mealsImage from '../assets/food.jpg';
import ButtonCart from './ButtonCart'
import Slider from './Slider/Slider'
const Header = (props) => {
    return (
        <Fragment>
            <header className='header'>
                <h1>GoodFood</h1>
                <ButtonCart onClick={props.onShowCart} />
            </header>
            {/* <div className='main-image'> */}
                <Slider/>
            {/* </div> */}
        </Fragment>
    );
};

export default Header;

{/* <Fragment>
<header className='header'>
  <h1>GoodFood</h1>
  <ButtonCart onClick={props.onShowCart} />
</header>
<div className='main-image'>
  <img src={mealsImage} alt='A table full of delicious food!' />
</div>
</Fragment> */}