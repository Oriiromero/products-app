import {React} from 'react'
import { useForm } from 'react-hook-form';

const Add = ({setProducts, products}) => {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const titleComponent = "Add product";

  const onSubmit = (dataF) => {

    let id = Date.now()
    setProducts([...products, {id, ...dataF, comments: []}]);

  }

  console.log(products);
  
  return (
    <>
    <div className='form-container'>
      <div className='add'>
        <h3  className='title'> {titleComponent} </h3>
      </div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input className='input-form' type='text' {...register('name', {required: true})} placeholder='Name'></input>

        <input className='input-form' type='number' {...register('amount', {required: true})} placeholder='Amount'></input>

        <button className='form-btn'> Save </button>
      </form>
    </div>
    </>
  )
}

export default Add;
