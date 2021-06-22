import React, { Component } from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
// import * as chartData from "../chartData/data";
// Include the chart type
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTheme);
charts(FusionCharts);
const DialogueGraph = (props) => {
const dataSource = {
  chart: {
    nodelabelposition: "outside",
    showlegend: 0,
    theme: "fusion",
    mode: "post",
    linkcolorbydominance: "0",
    animation: "0",
  },
  nodes: [
    {
      label: "Bob",
    },
    {
      label: "Charlie",
    },
    {
      label: "Teacher",
    },
    {
      label: "Jonas",
    },
    {
      label: "Stacy",
    },
    {
      label: "Julie",
    },
  ],
  links: [
    {
      from: "Bob",
      to: "Charlie",
      value: 3040000000,
    },
    {
      from: "Bob",
      to: "Teacher",
      value: 46500000000,
    },
    {
      from: "Bob",
      to: "Jonas",
      value: 12700000000,
    },
    {
      from: "Bob",
      to: "Stacy",
      value: 8860000000,
    },
    {
      from: "Bob",
      to: "Julie",
      value: 27500000000,
    },
    {
      from: "Charlie",
      to: "Bob",
      value: 24490000000,
    },
    {
      from: "Charlie",
      to: "Teacher",
      value: 310000000000,
    },
    {
      from: "Charlie",
      to: "Jonas",
      value: 18300000000,
    },
    {
      from: "Charlie",
      to: "Stacy",
      value: 9320000000,
    },
    {
      from: "Charlie",
      to: "Julie",
      value: 1830000000,
    },
    {
      from: "Teacher",
      to: "Bob",
      value: 24100000000,
    },
    {
      from: "Teacher",
      to: "Charlie",
      value: 277000000000,
    },
    {
      from: "Teacher",
      to: "Jonas",
      value: 132000000000,
    },
    {
      from: "Teacher",
      to: "Stacy",
      value: 53600000000,
    },
    {
      from: "Teacher",
      to: "Julie",
      value: 19900000000,
    },
    {
      from: "Jonas",
      to: "Bob",
      value: 68100000000,
    },
    {
      from: "Jonas",
      to: "Charlie",
      value: 51900000000,
    },
    {
      from: "Jonas",
      to: "Teacher",
      value: 480000000000,
    },
    {
      from: "Jonas",
      to: "Stacy",
      value: 56800000000,
    },
    {
      from: "Jonas",
      to: "Julie",
      value: 45800000000,
    },
    {
      from: "Stacy",
      to: "Charlie",
      value: 62400000000,
    },
    {
      from: "Stacy",
      to: "Teacher",
      value: 5780000000,
    },
    {
      from: "Stacy",
      to: "Bob",
      value: 518000000,
    },
    {
      from: "Stacy",
      to: "Jonas",
      value: 21200000000,
    },
    {
      from: "Stacy",
      to: "Julie",
      value: 9270000000,
    },
    {
      from: "Julie",
      to: "Bob",
      value: 20500000000,
    },
    {
      from: "Julie",
      to: "Charlie",
      value: 299000000,
    },
    {
      from: "Julie",
      to: "Teacher",
      value: 7470000000,
    },
    {
      from: "Julie",
      to: "Jonas",
      value: 1160000000,
    },
    {
      from: "Julie",
      to: "Stacy",
      value: 3550000000,
    },
  ],
};

      return (
        <div className="container-fluid " style={{backgroundColor:"white",padding:"20px"}}><span style={{fontWeight:"600",fontSize:"20px"}}>Dialogue Chart</span>
        <div className="row" style={{backgroundColor:"white"}}>
            <div className="col-4">
                <br/><br/>
                <b>Teacher Spoke the most</b>
                <br/><br/>
                Followed by <b>Charlie</b> and <b>Jonas</b>
                <br/><br/>
                <b>Julie</b> spoke the least in the class

            </div>
            <div className="col-8">
            <ReactFC
            type="chord"
            width="100%"
            height="300"
            dataFormat="JSON"
            dataSource={dataSource}
            />
            </div>
        </div>
        </div>
      );
  
  }
   
  // const mapStateToProps = (state) =>{
  
  //   return {
  //       faceEmotions: state.faceEmotionsReducer.faceEmotions,
  //       faceEmotionsFetching: state.faceEmotionsReducer.fetching
  //   };
  // }
  
  
  export default DialogueGraph;