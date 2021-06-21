import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Widgets from 'fusioncharts/fusioncharts.widgets';

ReactFC.fcRoot(FusionCharts, Widgets, Column2D, FusionTheme);

var monthVal = "47";
//var monthDetail = moment().format('MMMM YYYY');

var screenTime = {
    "chart": {
        "baseFont": "Montserrat",
        "setAdaptiveMin": "1",
        "baseFontColor": "#76767B",
        "chartTopMargin": "0",
        "canvasTopMargin": "0",
        "chartBottomMargin": "70",
        "chartLeftMargin": "10",
        "chartRightMargin": "10",
        "showTickMarks": "0",
        "showTickValues": "0",
        "showLimits": "1",
        "majorTMAlpha": "0",
        "minorTMAlpha": "0",
        "pivotFillAlpha": "0",
        "showPivotBorder": "0",
        "gaugeouterradius": "150",
        "gaugeInnerradius": "110",
        "showGaugeBorder": "0",
        "gaugeFillMix": "{light+0}",
        "showBorder": "0",
        "bgColor": "#1D1B41",
        "bgAlpha": "0",
        "canvasBgAlpha": "0",
        "transposeAnimation":"1"
    },

    "annotations": {
        "groups": [{
            "items": [
             {
                "id": "1",
                "type": "text",
                "text": `${monthVal}%`,
                "align": "center",
                "font": "Montserrat",
                "fontSize": "45",
                "color": "#252424",
                "x": "$chartcenterX",
                "y": "$chartCenterY + 30"
            }]
        }]
    },

    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": monthVal,
            "code": "#EACC6A"
        },
        {
            "minValue": monthVal,
            "maxValue": "100",
            "code": "#D9DBDB"
        }
        ]
    },

    "dials": {
        "dial": [{
            "value": `${monthVal}%`,
            "alpha": "0",
            "borderAlpha": "0",
            "radius": "0",
            "baseRadius": "0",
            "rearExtension": "0",
            "baseWidth": "0",
            "showValue": "0"
        }]
    }
};

var chartConfigs = {
	type: "angulargauge",
	className: "fc-angulargauge",
	id: "screenTime",
	dataFormat: "JSON",
	width: "400",
	height: "300",
	dataSource: screenTime
};

export default function ScreenTime() {
	return (
		<div>
			<ReactFC {...chartConfigs} />
		</div>
	)
}
