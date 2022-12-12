import React from 'react';
import "../index.css";
import ItemCount from './ItemCount';

const ItemListContainer = ({greetings}) => {
    return(
       <div>
        <p className='alert alert-danger text-center'>{greetings}</p>
        <div>
            <ItemCount stockItems={10}/>
        </div>
       </div>
    );
}

export default ItemListContainer;