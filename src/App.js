import logo from './logo.svg';
import Card from './DataEntry/Card'
import style from './style.scss';
import './App.css';
import { useState } from 'react';
import Header from './compoment/Header';
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider'
const DUMMY_MEALS = [
  {
    id: 1,
    img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title:"The Everyday Salad",
    description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!",
    price: 22.99,
  },
  {
    id: 2,
    img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Simple Risotto",
        description:"Fear Risotto no more! This simple recipe is perfect for family dinners.",
    price: 16.5,
  },
  {
    id: 3,
    img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Baked Cod with Vegetables",
        description:"Baked Cod with Vegetables. 30 minute meal!",
    price: 12.99,
  },
  {
    id: 4,
    img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title:"The Everyday Salad",
    description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!",
    price: 22.99,
  },
  {
    id: 5,
    img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Simple Risotto",
        description:"Fear Risotto no more! This simple recipe is perfect for family dinners.",
    price: 16.5,
  },
  {
    id: 6,
    img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Baked Cod with Vegetables",
        description:"Baked Cod with Vegetables. 30 minute meal!",
    price: 12.99,
  },
  {
    id: 7,
    img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title:"The Everyday Salad",
    description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!",
    price: 22.99,
  },
  {
    id: 8,
    img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Simple Risotto",
        description:"Fear Risotto no more! This simple recipe is perfect for family dinners.",
    price: 16.5,
  },
  {
    id: 9,
    img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Baked Cod with Vegetables",
        description:"Baked Cod with Vegetables. 30 minute meal!",
    price: 12.99,
  },
  {
    id: 10,
    img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title:"The Everyday Salad",
    description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!",
    price: 22.99,
  },
  {
    id: 11,
    img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Simple Risotto",
        description:"Fear Risotto no more! This simple recipe is perfect for family dinners.",
    price: 16.5,
  },
  {
    id: 12,
    img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Simple Risotto",
        description:"Fear Risotto no more! This simple recipe is perfect for family dinners.",
    price: 16.5,
  },
  {
    id: 13,
    img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Baked Cod with Vegetables",
        description:"Baked Cod with Vegetables. 30 minute meal!",
    price: 12.99,
  },
  {
    id: 14,
    img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title:"The Everyday Salad",
    description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!",
    price: 22.99,
  },
  {
    id: 15,
    img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Simple Risotto",
        description:"Fear Risotto no more! This simple recipe is perfect for family dinners.",
    price: 16.5,
  },
  {
    id: 16,
    img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Baked Cod with Vegetables",
        description:"Baked Cod with Vegetables. 30 minute meal!",
    price: 12.99,
  },
  {
    id: 17,
    img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title:"The Everyday Salad",
    description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!",
    price: 22.99,
  },
  {
    id: 18,
    img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Simple Risotto",
        description:"Fear Risotto no more! This simple recipe is perfect for family dinners.",
    price: 16.5,
  },
  {
    id: 19,
    img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"Baked Cod with Vegetables",
        description:"Baked Cod with Vegetables. 30 minute meal!",
    price: 12.99,
  },
];

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    setCartIsShown(false);
  }
  
  return (
    <>
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
    <div className="wrapper">
      { DUMMY_MEALS.map(item => (
        <Card
        id={item.id}
        img={item.img}
        title={item.title}
        description={item.description}
        price={item.price}
      />
      ))}
    </div>
    </main>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    </CartProvider>
    </>
  );
}

export default App;
// // import logo from './logo.svg';
// import { Card } from 'antd'
// import 'antd/dist/antd.css';
// import style from './style.scss';
// import './App.css';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
//     title: "The Everyday Salad",
//     description: "Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!",
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
//     title: "Simple Risotto",
//     description: "Fear Risotto no more! This simple recipe is perfect for family dinners.",
//     price: 16.5,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
//     title: "Baked Cod with Vegetables",
//     description: "Baked Cod with Vegetables. 30 minute meal!",
//     price: 12.99,
//   },
// ];
// function App() {
//   return (
//     <Card style={{display:'flex'}}>
//       {
//         DUMMY_MEALS.map(item => (<div className="card">
//           <div className="card__body">
//             <img src={item.img} class="card__image" />
//             <h2 className="card__title">{item.title}</h2>
//             <p className="card__description">{item.description}</p>
//             <p className="card__description">{item.price}</p>
//           </div>
//           <button className="card__btn">View Recipe</button>
//         </div>
//         )
//         )
//       }
//     </Card>);
// }

// export default App;
