import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

//canvas
const width = 960;
const height = 500;

//positions
const centerX = width / 2;
const centerY = height / 2;

//offsets
const eyeOffsetX = 120;
const eyeOffsetY = 100;

// Smiley
const headStrokeWidth = 20;
const eyeStrokeWidth = 20;
const eyeRadius = 40;
const smileyFillColor = 'yellow';
const eyeFillColor = 'white';
const irisFillColor = 'green';
const strokeColor = 'blue';
const mouthWidth = 30;
const mouthRadius = 140;

//mouth

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / (8 / 5))
  .endAngle((Math.PI * 7) / 5);

//head

const headArc = arc()
  .innerRadius(0)
  .outerRadius((height / 2)-headStrokeWidth)
  .startAngle(0)
  .endAngle(Math.PI * 2);

//eye

const eyeArc = arc()
  .innerRadius(0)
  .outerRadius(50)
  .startAngle(0)
  .endAngle(Math.PI * 2);

const irisArc = arc()
  .innerRadius(0)
  .outerRadius(10)
  .startAngle(0)
  .endAngle(Math.PI * 2);

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
      <path
        d={headArc()}
        stroke={strokeColor}
        stroke-width={headStrokeWidth}
        fill={smileyFillColor}
      />
      <path d={mouthArc()} fill={strokeColor} />
    </g>
    //This is a group for the positioning of the left eye
    <g
      transform={`translate(${centerX - eyeOffsetX},${
        centerY - eyeOffsetY
      })`}
    >
      <path
        d={eyeArc()}
        stroke={strokeColor}
        stroke-width={eyeStrokeWidth}
        fill={eyeFillColor}
      />
      <path d={irisArc()} fill={irisFillColor} />
    </g>
    //This is a group for the positioning of the right eye
    <g
      transform={`translate(${centerX + eyeOffsetX},${
        centerY - eyeOffsetY
      })`}
    >
      <path
        d={eyeArc()}
        stroke={strokeColor}
        stroke-width={eyeStrokeWidth}
        fill={eyeFillColor}
      />

      <path d={irisArc()} fill={irisFillColor} />
    </g>
  </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
