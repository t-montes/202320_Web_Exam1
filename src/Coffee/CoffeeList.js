import "./CoffeeList.css";
import React, { useState, useEffect, useContext } from 'react';
import AppContext from "../AppContext";
import CoffeeDetail from "./CoffeeDetail";

const coffees = [
    {
        // list
        nombre: "Café Especial para ti",
        tipo: "Blend",
        region: "Angelópolis, Antioquia",
        // detail
        fechaCultivo: "2023-01-18",
        imagen: "https://latiendadelcafe.co/cdn/shop/products/cafe-especial-para-ti-cafe-colombiano_720x.png?v=1670856834",
        notas: ["panela", "durazno", "caramelo"],
        alturaCultivo: 1920
    }
]

function CoffeeList() {
    const [selectedCoffee, setSelectedCoffee] = useState(null);//null);

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
                                <tr key={index} onClick={() => setSelectedCoffee(coffee)}>
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