import React from "react";
import { Button, Card } from "react-bootstrap";
import GaugeChart from "react-gauge-chart";

function WaitingTime() {
    return (
        <Card style={{ width: '30rem', height: '55em' }}>
        <Card.Header>
                <h6>Average Patient Wait Times - Today</h6>
                <Button variant="info">Refresh</Button>{' '}
            </Card.Header>
            <GaugeChart
                id="gauge-chart3"
                nrOfLevels={3}
                colors={["green", "orange", "red"]}
                arcWidth={0.3}
                percent={0.2}
                textColor={'black'}
                hideText={true} // If you want to hide the text
            />
            <h6>To Get a Bed: <span>5 Mins</span></h6>
            <GaugeChart
                id="gauge-chart3"
                nrOfLevels={3}
                colors={["green", "orange", "red"]}
                arcWidth={0.3}
                percent={0.8}
                textColor={'black'}
                hideText={true} // If you want to hide the text
            />
            <h6>To See a Doctor: <span>30 Mins</span></h6>
            <GaugeChart
                id="gauge-chart3"
                nrOfLevels={3}
                colors={["green", "orange", "red"]}
                arcWidth={0.3}
                percent={0.55}
                textColor={'black'}
                hideText={true} // If you want to hide the text
            />
            <h6>To Recieve Treatment: <span>18 Mins</span></h6>
        </Card>
    )
}

export default WaitingTime;