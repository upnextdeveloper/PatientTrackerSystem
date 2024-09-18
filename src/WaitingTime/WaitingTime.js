import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import GaugeChart from "react-gauge-chart";
import '../WaitingTime/WaitingTime.css';

function WaitingTime() {
  return (
    <div>
      <Row className={'meter_row'}>
        <Col className={'meter_column'}>
          <Card className={'meter'}>
            <Card.Header>
              <h6>Average Patient Wait Times - Today</h6>
              <Button variant="info">Refresh</Button>{" "}
            </Card.Header>
            <GaugeChart
              id="gauge-chart3"
              nrOfLevels={3}
              colors={["green", "orange", "red"]}
              arcWidth={0.3}
              percent={0.2}
              textColor={"black"}
              hideText={true} // If you want to hide the text
            />
            <h6>
            To See a Doctor: <span>30 Mins</span>
          </h6>
          </Card>
        </Col>
        <Col className={'meter_column'}>
          <Card className={'meter'}>
          <Card.Header>
            <h6>Average Patient Wait Times - Today</h6>
            <Button variant="info">Refresh</Button>{" "}
          </Card.Header>
          <GaugeChart
            id="gauge-chart3"
            nrOfLevels={3}
            colors={["green", "orange", "red"]}
            arcWidth={0.3}
            percent={0.55}
            textColor={"black"}
            hideText={true} // If you want to hide the text
          />
          <h6>
            To Get A Room: <span>30 Mins</span>
          </h6>
          </Card>
        </Col>

        <Col className={'meter_column'}>
          <Card className={'meter'}>
            <Card.Header>
              <h6>Average Patient Wait Times - Today</h6>
              <Button variant="info">Refresh</Button>{" "}
            </Card.Header>
            <GaugeChart
              id="gauge-chart3"
              nrOfLevels={3}
              colors={["green", "orange", "red"]}
              arcWidth={0.3}
              percent={0.8}
              textColor={"black"}
              hideText={true} // If you want to hide the text
            />
            <h6>
              To Get Signed Out: <span>5 Mins</span>
            </h6>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default WaitingTime;
