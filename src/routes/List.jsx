import React from 'react';
import "./List.css";
import { Link } from 'react-router-dom';
import ShoppingItem from '../components/ShoppingItem.jsx';
import AddShoppingItem from '../components/AddShoppingItem.jsx';


const List = () => {
    return (
        <div>
             <Link to="/">
                <button className="submit">Logga ut</button>
            </Link>

            <h1>Inköpslista</h1>
            <AddShoppingItem />

            <ShoppingItem />

            
        </div>
    );
}
export default List;