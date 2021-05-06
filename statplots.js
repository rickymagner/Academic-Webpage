var x1 = [];
var x2 = [];
var x3 = [];
var x4 = [];

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

let genLayout = (tickLength) => {return {
  xaxis: {
    range: [0.5,6.5],
    dtick: tickLength,
  },
}};

Plotly.newPlot("CLTplot1", genData([],1), genLayout(1));
Plotly.newPlot("CLTplot2", genData([],1), genLayout(1));
Plotly.newPlot("CLTplot3", genData([],1), genLayout(1));
Plotly.newPlot("CLTplot4", genData([],1), genLayout(1));


var rollButton = document.querySelectorAll(".rollButton");
const buttonTimes = [1,5,20,100,1000];
const numberRolled = [1,2,25,400];
rollButton[0].addEventListener("click", () => Plotly.newPlot("CLTplot1", genData(roll(buttonTimes[0],numberRolled[0], x1),1/numberRolled[0]), genLayout(1))); // for some reason a loop over index doesn't work...
rollButton[1].addEventListener("click", () => Plotly.newPlot("CLTplot1", genData(roll(buttonTimes[1],numberRolled[0], x1),1/numberRolled[0]), genLayout(1)));
rollButton[2].addEventListener("click", () => Plotly.newPlot("CLTplot1", genData(roll(buttonTimes[2],numberRolled[0], x1),1/numberRolled[0]), genLayout(1)));
rollButton[3].addEventListener("click", () => Plotly.newPlot("CLTplot1", genData(roll(buttonTimes[3],numberRolled[0], x1),1/numberRolled[0]), genLayout(1)));
rollButton[4].addEventListener("click", () => Plotly.newPlot("CLTplot1", genData(roll(buttonTimes[4],numberRolled[0], x1),1/numberRolled[0]), genLayout(1)));

var rollPairButton = document.querySelectorAll(".rollPairButton");
rollPairButton[0].addEventListener("click", () => Plotly.newPlot("CLTplot2", genData(roll(buttonTimes[0],numberRolled[1], x2),1/numberRolled[1]), genLayout(1/2))); // for some reason a loop over index doesn't work...
rollPairButton[1].addEventListener("click", () => Plotly.newPlot("CLTplot2", genData(roll(buttonTimes[1],numberRolled[1], x2),1/numberRolled[1]), genLayout(1/2)));
rollPairButton[2].addEventListener("click", () => Plotly.newPlot("CLTplot2", genData(roll(buttonTimes[2],numberRolled[1], x2),1/numberRolled[1]), genLayout(1/2)));
rollPairButton[3].addEventListener("click", () => Plotly.newPlot("CLTplot2", genData(roll(buttonTimes[3],numberRolled[1], x2),1/numberRolled[1]), genLayout(1/2)));
rollPairButton[4].addEventListener("click", () => Plotly.newPlot("CLTplot2", genData(roll(buttonTimes[4],numberRolled[1], x2),1/numberRolled[1]), genLayout(1/2)));

var roll25Button = document.querySelectorAll(".roll25Button");
roll25Button[0].addEventListener("click", () => Plotly.newPlot("CLTplot3", genData(roll(buttonTimes[0],numberRolled[2], x3),1/numberRolled[2]), genLayout(1/2))); // for some reason a loop over index doesn't work...
roll25Button[1].addEventListener("click", () => Plotly.newPlot("CLTplot3", genData(roll(buttonTimes[1],numberRolled[2], x3),1/numberRolled[2]), genLayout(1/2)));
roll25Button[2].addEventListener("click", () => Plotly.newPlot("CLTplot3", genData(roll(buttonTimes[2],numberRolled[2], x3),1/numberRolled[2]), genLayout(1/2)));
roll25Button[3].addEventListener("click", () => Plotly.newPlot("CLTplot3", genData(roll(buttonTimes[3],numberRolled[2], x3),1/numberRolled[2]), genLayout(1/2)));
roll25Button[4].addEventListener("click", () => Plotly.newPlot("CLTplot3", genData(roll(buttonTimes[4],numberRolled[2], x3),1/numberRolled[2]), genLayout(1/2)));

var roll400Button = document.querySelectorAll(".roll400Button");
roll400Button[0].addEventListener("click", () => Plotly.newPlot("CLTplot4", genData(roll(buttonTimes[0],numberRolled[3], x4),1/numberRolled[2]), genLayout(1/2))); // for some reason a loop over index doesn't work...
roll400Button[1].addEventListener("click", () => Plotly.newPlot("CLTplot4", genData(roll(buttonTimes[1],numberRolled[3], x4),1/numberRolled[2]), genLayout(1/2)));
roll400Button[2].addEventListener("click", () => Plotly.newPlot("CLTplot4", genData(roll(buttonTimes[2],numberRolled[3], x4),1/numberRolled[2]), genLayout(1/2)));
roll400Button[3].addEventListener("click", () => Plotly.newPlot("CLTplot4", genData(roll(buttonTimes[3],numberRolled[3], x4),1/numberRolled[2]), genLayout(1/2)));
roll400Button[4].addEventListener("click", () => Plotly.newPlot("CLTplot4", genData(roll(buttonTimes[4],numberRolled[3], x4),1/numberRolled[2]), genLayout(1/2)));
