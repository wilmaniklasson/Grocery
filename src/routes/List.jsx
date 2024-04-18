import React from 'react';
import "./List.css";
import { Link } from 'react-router-dom';
import Employees from '../components/Employees.jsx'
import AddEmployee from '../components/AddEmployee.jsx'


const List = () => {
    return (
        <div>
             <Link to="/">
                <button className="submit">Logga ut</button>
            </Link>

            <h1>Inköpslista</h1>
            <AddEmployee />

            <Employees />

            
        </div>
    );
}
export default List;