export const getWorldChartInfo = (summary, period, status, numeration) => {
  let chartData = [];
  let color = 'rgba(221, 1, 1, 0.650)';
  const statusArr = period ? ['New confirmed', 'New deaths', 'New recovered'] : ['Confirmed', 'Deaths', 'Recovered'];
  const now = new Date();
  const MonthArr = [15, 31, 30, 31, 31, 30, 31, 30, now.getDate()];
  let c = 0;
  let j = 0;
  let sum = 0;
  let num = MonthArr[j];
  switch (status) {
    case 0:
      summary.forEach((el) => {
        if (c <= num) {
          period ? sum += Number(el.NewConfirmed) : sum += Number(el.TotalConfirmed);
          c += 1;
        }
        if (c === num) {
          j += 1;
          num = MonthArr[j];
          chartData.push(sum);
          sum = 0;
          c = 0;
        }
      });
      for (let i = 0; i < MonthArr.length; i += 1) {
        chartData[i] = Math.trunc(chartData[i] / MonthArr[i]);
      }
      break;
    case 1:
      summary.forEach((el) => {
        if (c <= num) {
          period ? sum += Number(el.NewDeaths) : sum += Number(el.TotalDeaths);
          c += 1;
        }
        if (c === num) {
          j += 1;
          num = MonthArr[j];
          chartData.push(sum);
          sum = 0;
          c = 0;
        }
      });
      for (let i = 0; i < MonthArr.length; i += 1) {
        chartData[i] = Math.trunc(chartData[i] / MonthArr[i]);
      }
      break;
    case 2:
      color = 'rgba(75, 148, 20, 0.644)';
      summary.forEach((el) => {
        if (c <= num) {
          period ? sum += Number(el.NewRecovered) : sum += Number(el.TotalRecovered);
          c += 1;
        }
        if (c === num) {
          j += 1;
          num = MonthArr[j];
          chartData.push(sum);
          sum = 0;
          c = 0;
        }
      });
      for (let i = 0; i < MonthArr.length; i += 1) {
        chartData[i] = Math.trunc(chartData[i] / MonthArr[i]);
      }
      break;
    default:
      break;
  }

  if (numeration) {
    chartData = chartData.map((el) => Math.trunc((el * 100000) / 7827000000));
  }

  const res = {
    data: {
      labels: ['Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: `${statusArr[status]} cases`,
          backgroundColor: color,
          data: chartData,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 0,
          left: 15,
          right: 15,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [{
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        }],
        yAxes: [{
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        }],
      },

    },
  };

  return res;
};
export const getCountryChartInfo = (summary, period, status, numeration, population) => {
  let chartData = [];
  let color = 'rgba(221, 1, 1, 0.650)';
  const statusArr = ['Confirmed', 'Deaths', 'Recovered'];
  const monthTotal = [];
  const daysTotal = [];
  let days = 0;
  let month = 0;
  let check = '02';
  switch (status) {
    case 0:

      summary.forEach((el) => {
        if (el.Date.slice(5, 7) !== check) {
          check = el.Date.slice(5, 7);
          daysTotal.push(days);
          monthTotal.push(month);
          days = 0;
          month = 0;
        }
        days += 1;
        month += Number(el.Confirmed);
      });
      for (let i = 0; i < daysTotal.length; i += 1) {
        if (daysTotal[i] === 0) {
          chartData[i] = 0;
        } else {
          chartData[i] = Math.trunc(monthTotal[i] / daysTotal[i]);
        }
      }
      break;
    case 1:
      summary.forEach((el) => {
        if (el.Date.slice(5, 7) !== check) {
          check = el.Date.slice(5, 7);
          daysTotal.push(days);
          monthTotal.push(month);
          days = 0;
          month = 0;
        }
        days += 1;
        month += Number(el.Deaths);
      });
      for (let i = 0; i < daysTotal.length; i += 1) {
        if (daysTotal[i] === 0) {
          chartData[i] = 0;
        } else {
          chartData[i] = Math.trunc(monthTotal[i] / daysTotal[i]);
        }
      }
      break;
    case 2:
      color = 'rgba(75, 148, 20, 0.644)';
      summary.forEach((el) => {
        if (el.Date.slice(5, 7) !== check) {
          check = el.Date.slice(5, 7);
          daysTotal.push(days);
          monthTotal.push(month);
          days = 0;
          month = 0;
        }
        days += 1;
        month += Number(el.Recovered);
      });
      for (let i = 0; i < daysTotal.length; i += 1) {
        if (daysTotal[i] === 0) {
          chartData[i] = 0;
        } else {
          chartData[i] = Math.trunc(monthTotal[i] / daysTotal[i]);
        }
      }
      break;
    default:
      break;
  }
  if (numeration) {
    chartData = chartData.map((el) => Math.trunc((el * 100000) / population));
  }

  const res = {
    data: {
      labels: ['Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: `${statusArr[status]} cases`,
          backgroundColor: color,
          data: chartData,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 0,
          left: 15,
          right: 15,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [{
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        }],
        yAxes: [{
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        }],
      },

    },
  };

  return res;
};

export function dtimeNums(e) {
  const n = new Date();
  n.setDate(n.getDate() + e);
  return n.toISOString().slice(0, 10);
}
