import "./CoffeeDetail.css"
import React from 'react';
import Card from 'react-bootstrap/Card';


function CoffeeDetail({ coffee }) {
    return (
        <div className="CoffeeDetail">
            <Card className="CoffeeDetail-card">
                <Card.Body className="CoffeeDetail-card-body">
                    <Card.Title className="bold">{coffee.nombre.toUpperCase()}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{coffee.fecha_cultivo}</Card.Subtitle>
                    <Card.Img variant="top" src={coffee.imagen} />
                    <Card.Text className="CoffeeDetail-downtext">
                        Notas<br/>{coffee.notas}
                    </Card.Text>
                    <Card.Text className="bold CoffeeDetail-downtext">
                    Cultivado a una altura de {coffee.altura} msnm
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CoffeeDetail;