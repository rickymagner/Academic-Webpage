var x1 = [];
var x2 = [];
var x3 = [];
var x4 = [];


// Function for rolling dice
let roll = (times, number_rolled, origData) => {
  for (i = 0; i < times; i++) {
    var num = 0;
    for (j = 0; j < number_rolled; j++) {
      num += Math.round(Math.random()*6+0.5);
    }
    num = num/number_rolled;
    origData.push(num);
  };
  return origData;
};


// Get data structure to put in Plotly
let genData = (data, tickLength) => {return [
  {
    x: data,
    type: 'histogram',
    xbins: {
      start: 0.5,
      size: tickLength,
      end: 6.5,
    }
  }
]};


// Create layout to put in Plotly
let genLayout = (tickLength) => {return {
  xaxis: {
    range: [0.5,6.5],
    dtick: tickLength,
  },
}};


// Populate page with Plotly plots that get filled dynamically
for (let i = 1; i < 5; i++) {
	Plotly.newPlot("CLTplot" + i.toString(), genData([],1), genLayout(1));
}


// Set button presses / number to roll
const buttonTimes = [1,5,20,100,1000];
const numberRolled = [1,2,25,400];


// Add event listeners to each button with appropriate actions; use "let" to give i loop scope
var rollButton = document.querySelectorAll(".rollButton");
for (let i = 0; i < 5; i++) {
	rollButton[i].addEventListener("click", () => Plotly.newPlot("CLTplot1", genData(roll(buttonTimes[i],numberRolled[0], x1),1/numberRolled[0]), genLayout(1)));
}


var rollPairButton = document.querySelectorAll(".rollPairButton");
for (let i = 0; i < 5; i++) {
   rollPairButton[i].addEventListener("click", () => Plotly.newPlot("CLTplot2", genData(roll(buttonTimes[i],numberRolled[1], x2),1/numberRolled[1]), genLayout(1/2)));
}


var roll25Button = document.querySelectorAll(".roll25Button");
for (let i = 0; i < 5; i++) {
   roll25Button[i].addEventListener("click", () => Plotly.newPlot("CLTplot3", genData(roll(buttonTimes[i],numberRolled[2], x3),1/numberRolled[2]), genLayout(1/2)));
}


var roll400Button = document.querySelectorAll(".roll400Button");
for (let i = 0; i < 5; i++) {
   roll400Button[i].addEventListener("click", () => Plotly.newPlot("CLTplot4", genData(roll(buttonTimes[i],numberRolled[3], x4),1/numberRolled[2]), genLayout(1/2)));
}
