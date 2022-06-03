import CartContext from '../store/cart-context';
import CardItem from './CardItem'
import { useContext } from 'react';
function Card(props) {
const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: amount,
      price: props.price
    });
  };
    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} className="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <p className="card__price">Price: {props.price}$</p>
        </div>
        <div>
            <CardItem id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    );
  }
export default Card;