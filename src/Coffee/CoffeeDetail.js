import "./CoffeeDetail.css"
import React from 'react';
import Card from 'react-bootstrap/Card';
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';

function CoffeeDetail({ coffee }) {
    return (
        <div className="CoffeeDetail">
            <Card className="CoffeeDetail-card">
                <Card.Body className="CoffeeDetail-card-body">
                    <Card.Title className="bold">{coffee.nombre.toUpperCase()}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <FormattedDate value={new Date(coffee.fecha_cultivo)} year="numeric" month="numeric" day="numeric"/>
                    </Card.Subtitle>
                    <Card.Img variant="top" src={coffee.imagen} />
                    <Card.Text className="CoffeeDetail-downtext">
                        <FormattedMessage id="Notes"/><br/>{coffee.notas}
                    </Card.Text>
                    <Card.Text className="bold CoffeeDetail-downtext">
                    <FormattedMessage id="Grown"/> <FormattedNumber value={coffee.altura}/> <FormattedMessage id="masl"/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CoffeeDetail;