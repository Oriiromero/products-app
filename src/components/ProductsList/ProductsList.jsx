import React, { useState } from 'react';
import image from '../../images/cancel.png'
import imageEdit from '../../images/pencil.png';

const ProductsList = ({productsList, setProductsList}) => {

  const [edit, setEdit] = useState(0);

  const onDelete = (productId) => {
    const newProductsList = productsList.filter(product => product.id !== productId);
    setProductsList(newProductsList);
    console.log(productId);
  }

  const onEdit = (e, productId) => {
    e.preventDefault();

    let target = e.target;
    const index = productsList.findIndex(product => product.id === productId);
    let products = productsList;

    let updated_product = {
      productId,
      name: target.name.value,
      amount: target.amount.value
    }

    products[index] = updated_product;

    setProductsList(products);
    setEdit(0);
  }

  return (
    <>
      {productsList.map((product, index)=> {
        return (
        <div className='card-container' key={index}>
            <div className='card'>
              <div className='card__delete'>
                <img onClick={()=> onDelete(product.id)} src={image} alt={product.id} />

                <img onClick={()=> setEdit(product.id)} src={imageEdit} alt={product.id} />
              </div>
              <div className='card__content'>
                <h2 className='card__content_title'> {product.name} </h2>
                <p className='card__content_amount'> Amount: <strong>{product.amount}</strong> </p>
              </div>
            </div> 
            <div>
              <button className='comment-btn'> Comment </button>
            </div>

            {edit === product.id && (
              <>
              <br></br>
              <div className='form-container'>
                <h3> Edit product </h3>

                <form className='form' onSubmit={(e) => onEdit(e, product.id)}>
                  <input className='input-form' name='name' type='text' placeholder='Name'></input>

                  <input className='input-form' name='amount' type='number' placeholder='Amount'></input>

                  <button className='form-btn'> Save </button>
                </form>
              </div>
              </>
            )}
        </div>
        )
        }
      )} 
    </>
    
  )
}

export default ProductsList;
