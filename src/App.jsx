import { useEffect, useState } from 'react'
import { Dialog } from "radix-ui";
import './App.css'
import { getProducts } from './API/api'
import { ProductTable } from './components/molecules/ProductTable'
import { HeaderBar } from './components/molecules/ProductTable/HeaderBar/HeaderBar'
import { Cart } from './components/molecules/Cart/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const fetchData = async () => {
    const fetchedProducts = await getProducts()
    setProducts(fetchedProducts)
  }
  const addToCart = (product) => {
    const currentCount = cartItems[product.id]?.count || 0;

    setCartItems(
      {
        ...cartItems,
        [product.id]:
        {
          count: currentCount + 1,
          product: product
        }
      })
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <div className='max-w-[1280px]'>
        <Dialog.Root>
          <HeaderBar />
          <Cart items={cartItems} />
        </Dialog.Root>

        <ProductTable
          products={products}
          addToCart={addToCart}
        />
      </div>
    </>
  )
}

export default App
