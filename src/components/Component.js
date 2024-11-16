import React from 'react';
import './Component.css';


const Component = ({key, description, name, type, isNew, img, price}) => {
    return (
        
<dialog id={`my_modal_${name}`} className="modal">
  <div className="modal-box p-0">

    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
      <img src={require(`../assets/images/${img}`)} alt={name} className='modal-image' />
      <div className="modal-content">
          <h3 className="modal-title">
            {name} {isNew && <span className="new">NEW</span>}
          </h3>
          <p className="modal-description">{description}</p>
          <p className="price">{price.toLocaleString()}</p>
        </div>
      </div>
    </dialog>
  );
};
export default Component;