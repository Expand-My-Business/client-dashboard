// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Bar Chart Example
var ctx = document.getElementById("myPerformanceChart");
var myLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [1500, 1600, 1700, 1800, 1850, 1900, 1950, 2000, 2050, 2100],
      datasets: [
        {
          data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
          label: "Impression",
          lineTension: 0.3,
          borderColor: "rgb(244, 182, 8)",
          backgroundColor: "rgb(244, 182, 8,0.05)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(244, 182, 8, 1)",
          pointBorderColor: "rgba(244, 182, 8, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(244, 182, 8, 1)",
          pointHoverBorderColor: "rgba(244, 182, 8, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          fill: true
        },
        {
          data: [2820, 3500, 1200, 5020, 6350, 5090, 7470, 1402, 3700, 5267],
          label: "CPC",
          borderColor: "rgb(15, 157, 88)",
          backgroundColor: "rgb(15, 157, 88,0.05)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(15, 157, 88, 1)",
          pointBorderColor: "rgba(15, 157, 88, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(15, 157, 88, 1)",
          pointHoverBorderColor: "rgba(15, 157, 88, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          fill: true
        },
        {
          data: [1680, 1700, 1780, 1900, 2030, 2760, 4080, 5470, 6750, 7340],
          label: "Click",
          borderColor: "rgb(54, 185, 204)",
          backgroundColor: "rgb(54, 185, 204,0.05)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(54, 185, 204, 1)",
          pointBorderColor: "rgba(54, 185, 204, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(54, 185, 204, 1)",
          pointHoverBorderColor: "rgba(54, 185, 204, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          fill: true
        }
      ]
    },
    options: {
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 10,
          bottom: 0
        }
      },
      title: {
        display: false,
        text: "Adwords Performance",
        position: "top",
        fontSize: 25,
        fontFamily: "Dosis",
        fontColor: "black",
        fontStyle: "bold",
        padding: 10,
        lineHeight: 1
      },
      label: {},
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 50,
          fontSize: 13,
          fontColor: "rgb(0, 0, 0)",
          fontStyle: "normal",
          fontFamily: "Dosis",
          padding: 20
        }
      },
      tooltips: {
        mode: "point",
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        yPadding: 20,
        xPadding: 20,
        titleAlign: "center",
        bodyAlign: "center",
        displayColors: true
      },
      scales: {
        xAxes: [
          {
            time: {
                unit: 'day'
              },
            gridLines: {
                display: false,
                drawBorder: false
              },
            ticks: {
                maxTicksLimit: 10,
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return value;
              },
              fontSize: 13
            }
          }
        ],
        yAxes: [
          {
            ticks: {
                min: 0,
                // max: 10000,
                maxTicksLimit: 6,
                padding: 10,
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return value ;
              },
              fontSize: 13
            },
            gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
          }
        ]
      }
    }
  });
  