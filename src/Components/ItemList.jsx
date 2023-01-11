import React from "react";
import Item from "./Item";
import '../index.css';

const ItemList = ({ items }) => {      
    return (
        <section className="row itemList ">
            {
                items.map(item =>
                    <div key={item.id} className="col-md-6">
                        <Item item={item} />                        
                    </div>
                )
            }
        </section>
    )
}
 
export default ItemList;