import React from 'react';
import CanvasJSReact from '../../assets/lib/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Tab1 = () => {

    const options = {
        animationEnabled: true,
        title: {
            text: "Website Traffic Sources"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            dataPoints: [
                { y: 18, label: "Direct" },
                { y: 49, label: "Organic Search" },
                { y: 9, label: "Paid Search" },
                { y: 5, label: "Referral" },
                { y: 19, label: "Social" }
            ]
        }]
    }

    const ref_tab2 = React.createRef();

    return (
        <div ref={ref_tab2} className="container-fluid row m-0 min-vh-100 min-vw-100">   
            <div className="col-lg-6 my-auto col-12">
                <CanvasJSChart options={options} />
            </div>
            <div className="col-lg-6 my-auto col-12">

            </div>
        </div>
    );
}

export default Tab1;
