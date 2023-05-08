import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { CartProvider } from './context/CartContext'
import useFilters from './hooks/useFilters'
import { products } from './mocks/products.json'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <ProductList products={filteredProducts} />
    </CartProvider>
  )
}

export default App
