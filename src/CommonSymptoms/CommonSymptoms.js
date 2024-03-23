import React from "react";
import {Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import '../CommonSymptoms/CommonSymptoms.css';

function CommonSymptoms() {

    return (
        <Card style={{ width: '30em' }} className={"card"}>
            <Card.Header>
                <h6>Common Symptoms - Today</h6>
                <Button variant="info">Refresh</Button>{' '}
            </Card.Header>
            <Card.Body className={'cmn_symptom_list'}>
                <ListGroup>
                    <ListGroup.Item><span className={'cmn_symptom_top_list_item'}>1.</span> Cough</ListGroup.Item>
                    <ListGroup.Item className={'cmn_symptom_top_list_item_bg'}>2. Sneeze</ListGroup.Item>
                    <ListGroup.Item className={'cmn_symptom_top_list_item_bg'}>3. Migrane</ListGroup.Item>
                    <ListGroup.Item className={'cmn_symptom_top_list_item_bg'}>4. Dry Eyes</ListGroup.Item>
                    <ListGroup.Item className={'cmn_symptom_top_list_item_bg'}>5. Insomnia</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default CommonSymptoms;