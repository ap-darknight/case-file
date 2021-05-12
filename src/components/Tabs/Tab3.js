import React from 'react';
import CanvasJSReact from '../../assets/lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Tab1 = () => {

    const ref_data = React.createRef();

    const options = {
        theme: "light2",
        animationEnabled: true,
        title:{
            text: "Energy in Baked Foods"
        },
        axisY: {
            title: "Energy Per 100 g (kcal/100g)"
        },
        data: [{
            type: "boxAndWhisker",
            yValueFormatString: "#,##0.# \"kcal/100g\"",
            dataPoints: [
                { label: "Bread",  y: [179, 256, 300, 418, 274] },
                { label: "Cake",  y: [252, 346, 409, 437, 374.5] },
                { label: "Biscuit",  y: [236, 281.5, 336.5, 428, 313] },
                { label: "Doughnut",  y: [340, 382, 430, 452, 417] },
                { label: "Pancakes",  y: [194, 224.5, 342, 384, 251] },
                { label: "Bagels",  y: [241, 255, 276.5, 294, 274.5] }
            ]
        }]
    }

    const options_1 = {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: "Number of iPhones Sold"
        },
        axisY: {
            title: "Number of iPhones ( in Million )"
        },
        data: [
        {
            type: "area",
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0.## Million",
            dataPoints: [
                { x: new Date(2017, 0), y: 7.6},
                { x: new Date(2016, 0), y: 7.3},
                { x: new Date(2015, 0), y: 6.4},
                { x: new Date(2014, 0), y: 5.3},
                { x: new Date(2013, 0), y: 4.5},
                { x: new Date(2012, 0), y: 3.8},
                { x: new Date(2011, 0), y: 3.2}
            ]
        }
        ]
    }


    return (
        
        <div ref={ref_data} className="container-fluid row m-0 min-vh-100 min-vw-100">   
            <div className="col-lg-6 my-auto col-12">
                <CanvasJSChart options={options} />
            </div>
            <div className="col-lg-6 p-2 my-auto col-12">
                <CanvasJSChart options={options_1} />
            </div>
        </div>
    );
}

export default Tab1;
