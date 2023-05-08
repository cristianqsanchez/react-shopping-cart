import { AddToCartIcon } from './icons'
import useCart from '../hooks/useCart'

export default function ProductList ({ products }) {
  const { addToCart } = useCart()
  return (
    <section className='container'>
      <ul className='products'>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
            </div>
            <div>
              <strong>$ {product.price}</strong>
            </div>
            <div>
              <button onClick={() => addToCart(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>

  )
}
