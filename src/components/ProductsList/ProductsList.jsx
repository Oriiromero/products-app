import React, { useState } from 'react';
import image from '../../images/cancel.png'
import imageEdit from '../../images/pencil.png';
import Edit from '../Edit/Edit';
import Modal from '../Modal/Modal';


const ProductsList = ({productsList, setProductsList}) => {

  const [edit, setEdit] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState();

  const onDelete = (productId) => {
    const newProductsList = productsList.filter(product => product.id !== productId);
    setProductsList(newProductsList);
    console.log(productId);
  }

  const openModal = (productId) => {

    setModalId(productId);

    setIsOpen(true);
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
              <button className='comment-btn' onClick={() => openModal(product.id)}> Comment </button>
            </div>
            <div className='modal-container'>
              <Modal open={isOpen} close = {() => setIsOpen(false)} productsList={productsList} setProductsList={setProductsList} productId={modalId} setIsOpen={setIsOpen}></Modal>
            </div>
           

            {edit === product.id && (
              <Edit productsList={productsList} setProductsList={setProductsList} edit={edit} setEdit={setEdit} productId={product.id}/>
            )}
        </div>
        )
        }
      )} 
    </>
    
  )
}

export default ProductsList;
