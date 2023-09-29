import "./CoffeeDetail.css"
import React from 'react';
import Card from 'react-bootstrap/Card';


function CoffeeDetail({ coffee }) {
    return (
        <div className="CoffeeDetail">
            <Card style={{ width: '18rem', backgroundColor: '#FBF1F1' }}>
                <Card.Body>
                    <Card.Title className="bold">{coffee.nombre.toUpperCase()}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{coffee.fechaCultivo}</Card.Subtitle>
                    <Card.Img variant="top" src={coffee.imagen} />
                    <Card.Text>
                        <p>Notas<br/>{coffee.notas.join(", ")}</p>
                        <p className="bold">Cultivado a una altura de {coffee.alturaCultivo} msnm</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CoffeeDetail;