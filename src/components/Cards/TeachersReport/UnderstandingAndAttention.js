import React, { Component,useState } from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import { connect , useDispatch } from "react-redux";

// import { fetchFaceEmotions } from "../../../actions/FaceEmotion/faceEmotionsActions";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionTheme);

charts(FusionCharts);
const MyEmotion = () =>{
  

const dataSource = {
    chart: {
      theme: "fusion",
      // xaxisminvalue: "0",
      // xaxismaxvalue: "100",
      // yaxisminvalue: "0",
      // yaxismaxvalue: "30000",
      xaxisname: "Understanding",
      yaxisname: "Satisfaction",
      plottooltext: "$name",
      drawquadrant: "1",
      // quadrantlabeltl: "Low Price / High Sales",
      // quadrantlabeltr: "High Price / High Sales",
      // quadrantlabelbl: "Low Price / Low Sales",
      // quadrantlabelbr: "High Price / Low Sales",
      // quadrantxval: "54",
      // quadrantyval: "12000",
      quadrantlinealpha: "50",
      quadrantlinethickness: "2"
    },
    categories: [
      {
        category: [
          {
            label: "0",
            x: "0"
          },
          {
            label: "20",
            x: "20",
            showverticalline: "1"
          },
          {
            label: "40",
            x: "40",
            showverticalline: "1"
          },
          {
            label: "60",
            x: "60",
            showverticalline: "1"
          },
          {
            label: "80",
            x: "80",
            showverticalline: "1"
          },
          {
            label: "100",
            x: "100",
            showverticalline: "1"
          }
        ]
      }
    ],
    dataset: [
      {
        data: [
          {
            x: "80",
            y: "15000",
            z: "1",
            name: "User 1"
          },
          {
            x: "60",
            y: "18500",
            z: "1",
            name: "User 2"
          },
          {
            x: "50",
            y: "19450",
            z: "1",
            name: "User 3"
          },
          {
            x: "65",
            y: "10500",
            z: "1",
            name: "User 4"
          },
          {
            x: "43",
            y: "8750",
            z: "1",
            name: "User 5"
          },
          {
            x: "32",
            y: "21000",
            z: "1",
            name: "User 6"
          },
          {
            x: "44",
            y: "13000",
            z: "1",
            name: "User 7"
          }
        ]
      }
    ],
    trendlines: [
      {
        line: [
          {
            startvalue: "20000",
            endvalue: "30000",
            istrendzone: "1",
            color: "#aaaaaa",
            alpha: "14"
          },
          {
            startvalue: "10000",
            endvalue: "20000",
            istrendzone: "1",
            color: "#aaaaaa",
            alpha: "7"
          }
        ]
      }
    ]
  };

    return (

 
      <div className="card"  style={{marginTop:'10px'}} >
        <div className="card-body">


            <h6 className="c-heading" >Understanding And Attention</h6>
              <ReactFC
              type="bubble"
              width="100%"
              height="335"
              dataFormat="JSON"
              dataSource={dataSource}
            />
  
        </div>
    </div> 
      
    );

}

export default MyEmotion;

