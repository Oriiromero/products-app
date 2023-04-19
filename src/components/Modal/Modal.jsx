import image from '../../images/cancel.png';

const Modal = ({open, close, productsList, setProductsList, productId, setIsOpen}) => {

    // const [comment, setComment] = useState('');

    if(!open) return null

    const onSave = (e, productId) => {
        e.preventDefault();
      
        let text = e.target.comments.value;
        const index = productsList.findIndex(product => product.id === productId);
        const oldProduct = productsList[index];

        oldProduct.comments.push(text);
        productsList[index] = oldProduct;

        const updatedProductsList = [...productsList];
        updatedProductsList[index] = oldProduct;

        setProductsList(updatedProductsList);

        console.log(oldProduct)
        console.log(productsList);
      }

  return (
    <div className='content-modal'>
        <div className='content-modal_inner'>
            <div className='img-modal'>
                <img src={image} onClick={close} alt='cross'/>
            </div>
            <div className='content-modal-box'>
                    {productsList.map((product, index)=> {
                        return (
                            product.id === productId && 
                            (
                            product.comments.length === 0 ? 
                                (
                                    <div  className='coment-modal-none' key={index}><p>There's no comments</p></div>
                                ) : (
                                    product.comments.map((comment, commentIndex) => <div className='coment-modal-many' key={commentIndex}><p> {comment} </p><hr></hr></div>)
                                    )
                            )
                        )
                    })}
                <form className='form-modal' onSubmit={(e) => onSave(e, productId)}>
                    <p> Write your comment here: </p>
                    <input className='input-modal' type='text' name='comments' placeholder='Comment'></input>
                    <button className='btn-modal'> Save </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal
