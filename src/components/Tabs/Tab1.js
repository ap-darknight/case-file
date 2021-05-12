import React from 'react';
import CanvasJSReact from '../../assets/lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Tab1 = () => {

    const options = {
        title: {
            text: "Basic Column Chart"
        },
        data: [
        {
            type: "column",
            dataPoints: [
                { label: "Apple",  y: 10  },
                { label: "Orange", y: 15  },
                { label: "Banana", y: 25  },
                { label: "Mango",  y: 30  },
                { label: "Grape",  y: 28  }
            ]
        }
        ]
    }

    
    return (
        <div className="container-fluid row m-0 min-vh-100 min-vw-100">   
            <div className="col-lg-7 my-auto col-12">
                <CanvasJSChart options={options} />
            </div>
            <div className="col-lg-5 d-flex flex-column my-auto col-12">
                
            </div>
        </div>
    );
}

export default Tab1;
