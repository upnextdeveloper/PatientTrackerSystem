import React from "react";
import { Button, Card } from "react-bootstrap";
import CanvasJSReact from "@canvasjs/react-charts";

function CustomerSatisfaction() {
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        animationEnabled: true,
        title: {
            text: "Customer Satisfaction"
        },
        subtitles: [{
            text: "71% Positive",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Unsatisfied", y: 5 },
                { name: "Very Unsatisfied", y: 31 },
                { name: "Very Satisfied", y: 40 },
                { name: "Satisfied", y: 17 },
                { name: "Neutral", y: 7 }
            ]
        }]
    }
    return (
        <Card className={'card_style'}>
            <Card.Header>
                <h6>Customer Satisfaction - Today</h6>
                <Button variant="info">Refresh</Button>{' '}
            </Card.Header>
            <Card.Body>
                <CanvasJSChart options={options}/>
            </Card.Body>
        </Card>
    )
}

export default CustomerSatisfaction;