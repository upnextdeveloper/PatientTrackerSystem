import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import CanvasJSReact from "@canvasjs/react-charts";

function CustomerSatisfaction() {
    const url='http://localhost:8080/api/feedback';
    const [loading, setLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [vsatisfied, setVsatisfied] = useState(0);
    const [satisfied, setSatisfied] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [unsatisfied, setUnsatisfied] = useState(0);
    const [vunsatisfied, setVUnsatisfied] = useState(0);
    const [positiveFeedback, setPositiveFeedback] = useState(0);

    useEffect(() => {
        try{
            fetch(url).then(response => response.json())
            .then(data => setFeedback(data))
        }catch(error){
            console.log(error.message);
        }finally {
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        countVerySatisifiedPecent();
        countSatisifiedPecent();
        countNeutralPecent();
        countUnsatisfiedPecent();
        countvUnsatisfiedPecent();
        countPositiveFeedback();
    })

    function countVerySatisifiedPecent(){
        let vSatisified = feedback.filter((f) => {
            return f.feedbackDesc === 'VERY_SATISFIED';
        })
        setVsatisfied(Math.floor((vSatisified.length / feedback.length) * 100));
    }

    function countSatisifiedPecent(){
        let satisified = feedback.filter((f) => {
            return f.feedbackDesc === 'SATISFIED';
        })
        setSatisfied(Math.floor((satisified.length / feedback.length) * 100));
    }

    function countNeutralPecent(){
        let neutral = feedback.filter((f) => {
            return f.feedbackDesc === 'NEUTRAL';
        })
        setNeutral(Math.floor((neutral.length / feedback.length) * 100));
    }

    function countUnsatisfiedPecent(){
        let unsatisfied = feedback.filter((f) => {
            return f.feedbackDesc === 'UNSATISFIED';
        })
        setUnsatisfied(Math.floor((unsatisfied.length / feedback.length) * 100));
    }

    function countvUnsatisfiedPecent(){
        let vunsatisfied = feedback.filter((f) => {
            return f.feedbackDesc === 'VERY_UNSATISFIED';
        })
        setVUnsatisfied(Math.floor((vunsatisfied.length / feedback.length) * 100));
    }

    function countPositiveFeedback(){
        let positive = feedback.filter((f) => {
            return f.feedbackDesc === 'VERY_SATISFIED' || f.feedbackDesc === 'SATISFIED';
        })
        setPositiveFeedback(Math.floor((positive.length / feedback.length) * 100));
    }

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        animationEnabled: true,
        title: {
            text: "Customer Satisfaction"
        },
        subtitles: [{
            text: positiveFeedback + "% Positive",
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
                { name: "Unsatisfied", y: unsatisfied },
                { name: "Very Unsatisfied", y: vunsatisfied },
                { name: "Very Satisfied", y: vsatisfied},
                { name: "Satisfied", y: satisfied },
                { name: "Neutral", y: neutral }
            ]
        }]
    }
    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && (
                <Card className={'card_style'}>
                <Card.Header>
                    <h6>Customer Satisfaction - Today</h6>
                    <Button variant="info">Refresh</Button>{' '}
                </Card.Header>
                <Card.Body>
                    <CanvasJSChart options={options}/>
                </Card.Body>
            </Card>
            )}
        </div>
    )
}

export default CustomerSatisfaction;