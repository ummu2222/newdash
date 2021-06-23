import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
  {
		label: "Happiness",
		value: "20",
		color: "#FFE990"
	},
	{
		label: "Sadness",
		value: "15",
		color: "#83D0FF"
	},
	{
		label: "Neutral",
		value: "35",
		color: "#C9C9C9"
	},
	{
		label: "Surprise",
		value: "15",
		color: "#FBB881"
	},
	{
		label: "Fear",
		value: "10",
		color: "#AAA4EC"
	},
	{
		label: "Anger",
		value: "4",
		color: "#FC8379"
	},
	{
		label: "Repulsive",
		value: "1",
		color: "#AFE386"
	},
];

const chartConfigs = {
  type: "doughnut2d",
	className: "fc-doughnut2d", 
	dataFormat: "JSON",
	width: "400",
	height:"400",
	id: "myClassEmotion",
	dataSource: {
    // Chart Configuration
		chart: {
			"showPercentValues": "1",
			"valuePosition": "inside",
			"minAngleForValue": "3.6",
			"showShadow": "0",
			"use3DLighting": "0",
			"showLabels": "0",
			"bgColor": "#1D1B41",
			"bgAlpha": "0",
			"canvasBgAlpha": "0",
			"doughnutRadius": "120",
			"pieRadius": "150",
			"plotBorderAlpha": "0",
			"toolTipBgcolor": "#484E69",
			"toolTipPadding": "7",
			"toolTipBorderRadius": "3",
			"toolTipBorderAlpha": "30",
			"tooltipBorderThickness": "0.7",
			"toolTipColor": "#FDFDFD",
			"baseFont": "Montserrat",
			"baseFontSize": "14",
			"baseFontColor": "#FDFDFD",
			"chartTopMargin": "0",
			"canvasTopMargin": "0",
			"chartBottomMargin": "0",
			"canvasBottomMargin": "0",
			"enableRotation": "1",
			"transposeAnimation":"1",
			"showBorder": "0",
			"plotToolText": "<div>$label<br>$percentValue<div>"
		},
		// Chart Data
		data: chartData
  }
};

export default function MyClassEmotionChart() {
	return (
		<div>
			<ReactFC {...chartConfigs} />
		</div>
	)
}
