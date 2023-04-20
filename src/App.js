import { useState } from 'react';
import './App.css';
import ProductsList from './components/ProductsList/ProductsList';
import Add from './components/Add/Add';
 
function App() {

  const [products, setProducts] = useState ([{
    id: 1,
    name: "Pencil",
    amount: 5,
    comments: []
  }, {
    id: 2,
    name: "Book",
    amount: 1,
    comments: []
  },{
    id: 3,
    name: "Rubber",
    amount: 2,
    comments: []
  }])

  const [text, setText] = useState('Provider')

  const userChange = (e) => {
    if(text === 'Provider'){
      setText('Client');
    } else {
      setText('Provider');
    }
  }
  

  return (
    <>
      <header className='header'>
        <h2> {text} </h2>
        <button className='btn-header' onClick={(e) => userChange(e)}> Change user </button>
      </header>
      <div className='layout'>
        <section className='content-box'>
          <div className='products-title'>
            <h2> Products </h2>
          </div>
          <div className='list'>
            <ProductsList productsList={products} setProductsList={setProducts}/>
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
