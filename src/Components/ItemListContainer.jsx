import React from 'react';
import "../index.css";

const ItemListContainer = ({prop}) => {
    return(
       <div>
        <p className='alert alert-danger text-center'>{prop}</p>
       </div>
    );
}

export default ItemListContainer;