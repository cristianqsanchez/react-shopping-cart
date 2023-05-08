import { useId } from 'react'
import useCart from '../hooks/useCart'
import { CartIcon, ClearCartIcon } from './icons'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export default function Cart () {
  const cartCheckBoxId = useId()
  const { addToCart, cart, clearCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem key={product.id} {...product} addToCart={() => addToCart(product)} />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
