import "./CoffeeList.css";
import React, { useState, useEffect, useContext } from 'react';
import AppContext from "../AppContext";
import CoffeeDetail from "./CoffeeDetail";

function CoffeeList() {    
    const { loadCoffees, getCoffee } = useContext(AppContext);

    const [coffees, setCoffees] = useState([]);
    const [selectedCoffee, setSelectedCoffee] = useState(null);

    const selectCoffee = (async (id) => {
        const coffee = await getCoffee(id);
        setSelectedCoffee(coffee);
    });

    // useeffect to await load coffees and set the result to coffees
    useEffect(() => {
        loadCoffees().then((data) => {
            console.log(data);
            setCoffees(data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="Coffee">
            <div className="row">
                <div className="Coffee-list">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Región</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coffees.map((coffee, index) => (
                                <tr key={index} onClick={() => selectCoffee(coffee.id)}>
                                    <th scope="row">{index+1}</th>
                                    <td>{coffee.nombre}</td>
                                    <td>{coffee.tipo}</td>
                                    <td>{coffee.region}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="Coffee-detail">
                    { selectedCoffee && 
                        <CoffeeDetail coffee={selectedCoffee} />
                    }
                </div>
            </div> 
        </div>
    );
}

export default CoffeeList;