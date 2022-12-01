import React from 'react';
import "../index.css";

const ItemListContainer = ({greetings}) => {
    return(
       <div>
        <p className='alert alert-danger text-center'>{greetings}</p>
       </div>
    );
}

export default ItemListContainer;