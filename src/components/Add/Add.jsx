import {React} from 'react'
import { useForm } from 'react-hook-form';

const Add = ({setProducts, products}) => {

  const {register, handleSubmit} = useForm();

  const titleComponent = "Add product";

  const onSubmit = (dataF) => {

    let id = Date.now()
    setProducts([...products, {id, ...dataF, }]);

  }
  
  return (
    <>
    <div className='form-container'>
      <div className='add'>
        <h3  className='title'> {titleComponent} </h3>
      </div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input className='input-form' type='text' {...register('name')} placeholder='Name'></input>

        <input className='input-form' type='number' {...register('amount')} placeholder='Amount'></input>

        <button className='form-btn'> Save </button>
      </form>
    </div>
    </>
  )
}

export default Add;
