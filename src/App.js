import { useState } from 'react';
import './App.css';
import ProductsList from './components/ProductsList/ProductsList';
import Add from './components/Add/Add';
 
function App() {

  const [products, setProducts] = useState ([{
    id: 1,
    name: "Pencil",
    amount: 5
  }, {
    id: 2,
    name: "Book",
    amount: 1
  },{
    id: 3,
    name: "Rubber",
    amount: 2
  }])

  return (
    <>
      <header className='header'>
        {/* IMPRIMIR EL COMPONENTE DE USUARIO */}
      </header>
      <div className='layout'>
        <section className='content-box'>
          <div className='products-title'>
            <h2> Products </h2>
          </div>
          <div className='list'>
            <ProductsList productsList={products} setProductsList={setProducts} />
          </div>
        </section>
        <aside className='lateral'>
          <Add setProducts={setProducts} products={products}></Add>
        </aside>
      </div>
    </>
    
  )
}

export default App;
