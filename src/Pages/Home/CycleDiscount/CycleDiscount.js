import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CycleDiscount = () => {
    return (
        <Container className="mb-5">
            <Row className="g-5">
                <Col>
                    <img src="https://i.ibb.co/YNXPt7N/watermelon-bicycle-background-with-summer-sales-23-2147626869.jpg" alt="" />
                </Col>
                <Col className="p-5">
                    <h2>Fahrradteile – dein Bike verdient gute Teile und Komponenten</h2>
                    <p>Über 10.000 Teile sprechen eine deutliche Sprache: Wir haben eine riesige Auswahl in allen Bereichen – für Mountainbikes, klassische Trekkingräder, E-Bikes, Rennräder, Triathlonmaschinen etc. Denn es kann jedem Radfahrer passieren: Etwas geht defekt am Rad und Ersatz wird benötigt. Oder das Fahrrad braucht ein kleines Upgrade oder eine Veränderung, um es fit für neue Herausforderungen zu machen. Ein Klassiker sind natürlich auch Verschleißteile, die unweigerlich nach einer bestimmten Kilometerzahl ersetzt werden müssen. Ganz egal, was davon der Fall ist: Auf diese Teile kannst du bauen.

                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default CycleDiscount;