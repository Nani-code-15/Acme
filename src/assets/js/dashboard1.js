// $(function() {
//     "use strict";
  
//      // chart 1
   
//      var xValues = ["jan", "feb","mar","apr","may","jun","jul","aug","sep","oct"];

//      new Chart("chart1", {
//        type: "line",
//        data: {
//          labels: xValues,
//          datasets: [{ 
//            data: ["$5k","$10k","$15k","$20k","$25k","$30k","$35k","$40k","$45k","$50k"],
//            borderColor: "red",
//            fill: false
//          }, { 
//            data: ["$5k","$10k","$15k","$20k","$25k","$30k","$35k","$40k","$45k","$50k"],
//            borderColor: "green",
//            fill: false
//          },]
//        },
//     })
// });	 
$(function() {
  "use strict";

   // chart 1
 
    var ctx = document.getElementById('chart1').getContext('2d');
  
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: 'New Visitor',
          data: [1, 3, 8, 5, 7, 4, 6, 4, 6, 3],
          backgroundColor: "rgba(128, 226, 255 , 0.5)",
          borderColor: "transparent",
          pointRadius :"3",
          borderWidth: 2
        }, {
          label: 'Old Visitor',
          data: [7, 5, 14, 7, 12, 6, 10, 6, 11, 5],
          backgroundColor: "rgba(183, 179, 251 , 0.7)",
          borderColor: "transparent",
          pointRadius :"3",
          borderWidth: 1
        }]
      },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
        fontColor: '#585757',  
        boxWidth:0
        }
      },
      tooltips: {
        displayColors:false
      },	
      scales: {
        xAxes: [{
        ticks: {
          beginAtZero:true,
          fontColor: '#585757'
        },
        gridLines: {
          display: true ,
          color: "rgba(255, 255,255, 0.05)"
        },
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
             show: true
          },
          gridLines:{
             color:"#ecedef"
          },
          ticks: {
             beginAtZero:true,
             stepSize: 2,
             fontColor:"#8f9092",
             callback:function(value) {
                 var x = ["$5k","$10k","$15k","$20k","$25k","$30k","$35k"]
                   return x[value | 0];
             }
          }
       }]
       }

     }
    });  
     
    //chart 2

    var ctx = document.getElementById("chart2").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["France", "Italy", "Japan", "Canada"],
        datasets: [{
          backgroundColor: [
            "#80E2FF",
            "#F49FA8",
            "#FFDF94",
            "#B5B3FB"
          ],
          data: [4260, 3970, 4260, 3970],
          borderWidth: [0, 0, 0, 0]
        }]
      },
      options: {
        maintainAspectRatio: false,
        cutoutPercentage: 50,
        
         legend: {
         position :"bottom",	
         display: false,
          labels: {
            fontColor: '#ddd',  
            boxWidth:1
           }
        }
        ,
        tooltips: {
          displayColors:false
        }
         }
    });
});