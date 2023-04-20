import React from 'react';
import image from '../../images/cancel.png';

const Edit = ({productsList, setProductsList, edit, setEdit, productId}) => {

    const onEdit = (e, productId) => {
        e.preventDefault();
    
        let target = e.target;
        const index = productsList.findIndex(product => product.id === productId);
        let products = productsList;

    
        let updated_product = {
          id: productId,
          name: target.name.value,
          amount: target.amount.value,
          comments: []
        }

        products[index] = updated_product;
        console.log(updated_product);
        setProductsList(products);
        setEdit(0);
      }
    
    const closeForm = () => {
        setEdit(0);
    }

  return (
    <div>
        <br></br>
        <div className='form-container-edit'>
            <div className='form-container-titleimg'>
                <img className='form-container_img' onClick={closeForm} src={image} alt={productId} />
                <h3> Edit product </h3>
            </div>
            <form className='form' onSubmit={(e) => onEdit(e, productId)}>
                <input className='input-form' name='name' type='text' placeholder='Name'></input>

                <input className='input-form' name='amount' type='number' placeholder='Amount'></input>

                <button className='form-btn'> Save </button>
            </form>
        </div>
    </div>
  )
}

export default Edit
