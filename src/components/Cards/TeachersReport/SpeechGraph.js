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
// FusionCharts("mychart").addEventListener ("LegendItemClicked" , myChartListener );

const SpeechGraph = (props) => {

  function showBoth(){

   var dataSource2 = {...dataSource};
   
   dataSource2.dataset[0]['visible'] = "1";
   dataSource2.dataset[1]['visible'] = "1";
   setDataSource({...dataSource2});
   setSpeechTitle("Speech Data");
   setSpeechNavB("page-item active");
   setSpeechNavS("page-item");
   setSpeechNavV("page-item");
 }

 function showSpeed(){
    
  var dataSource2 = {...dataSource};
  dataSource2.dataset[0]['visible'] = "1";
  dataSource2.dataset[1]['visible'] = "0";
  setDataSource({...dataSource2});
  setSpeechTitle("Speech Speed");
  setSpeechNavB("page-item");
  setSpeechNavS("page-item active");
  setSpeechNavV("page-item");
}
function showVolume(){
    
  var dataSource2 = {...dataSource};
  
  dataSource2.dataset[0]['visible'] = "0";
  dataSource2.dataset[1]['visible'] = "1";
  setDataSource({...dataSource2});
  setSpeechTitle("Speech Volume");
  setSpeechNavB("page-item");
  setSpeechNavS("page-item");
  setSpeechNavV("page-item active");
}
 
var dataSource1 = {
  chart: {
    yaxisname: "",
    xaxisname: "",
    drawcrossline: "1",
    legendPosition : "top-left",
    numbersuffix: "%",
    plottooltext: "$seriesName: $label",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "April 2016"
        },
        {
          label: "July 2016"
        },
        {
          label: "Oct 2016"
        },
        {
          label: "Jan 2017"
        },
        {
          label: "April 2017"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Speed",
      color:"#edceb3",
      visible:"1",
      data: [
        {
          value: "9.2"
        },
        {
          value: "7.9"
        },
        {
          value: "7.5"
        },
        {
          value: "7"
        },
        {
          value: "6.1"
        }
      ]
    },
    {
      seriesname: "Volume",
      color:"#bde0e7",
      visible:"1",
      data: [
        {
          value: "6.7"
        },
        {
          value: "8.7"
        },
        {
          value: "3.7"
        },
        {
          value: "2.8"
        },
        {
          value: "9.9"
        }
      ]
    }
  ]
};
const [dataSource, setDataSource] =  useState({...dataSource1});
const [speechTitle, setSpeechTitle] =  useState('Speech Data');
const [speechNavB,setSpeechNavB] = useState("page-item active");
const [speechNavS,setSpeechNavS] = useState("page-item");
const [speechNavV,setSpeechNavV] = useState("page-item");
    return (
      <div style={{backgroundColor:"white",padding:"20px"}}>
        {/* <button onClick={myfunc}>Click</button> */}
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <span style={{fontWeight:"600",fontSize:"20px"}}>{speechTitle}</span>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={speechNavB}><a className="page-link" onClick={showBoth}>Both</a></li>
            <li className={speechNavS}><a className="page-link" onClick={showSpeed}>Speed</a></li>
            <li className={speechNavV}><a className="page-link" onClick={showVolume}>Volume</a></li>
            
          </ul>
        </nav>
      </div>
      <ReactFC id="mychart"
        type="msarea"
        
        width="100%"
        height="300"
        dataFormat="JSON"
        dataSource={dataSource}
      />
      </div>
      
    );

}
 
// const mapStateToProps = (state) =>{

//   return {
//       faceEmotions: state.faceEmotionsReducer.faceEmotions,
//       faceEmotionsFetching: state.faceEmotionsReducer.fetching
//   };
// }


export default SpeechGraph;