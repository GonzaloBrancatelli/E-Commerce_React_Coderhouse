import React from "react";
import Item from "./Item";
import '../index.css';

const ItemList = ({ items }) => {    
    return (
        <div className="row itemList">
            {
                items.map(item =>
                    <div className="col-md-6">
                        <Item item={item} />
                    </div>
                )
            }
        </div>
    )
}

export default ItemList;