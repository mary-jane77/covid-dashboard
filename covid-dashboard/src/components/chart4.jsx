import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/chart4.scss';

const Chart4 = (props) => {
  const statusArr = ['Confirmed', 'Deaths', 'Recovered'];
  const numbers = ['Absolute number', 'Per 100 th.'];
  const periods = ['Whole period', 'Daily change'];
  const [status, setStatusInfo] = useState(props.status);
  const [period, setPeriodInfo] = useState(props.period);
  const [numeration, setNumeration] = useState(props.numeration);

  return (
    <div onMouseOver={() => {
      document.querySelector('.chart .zoom-btn').style.display = 'block';
    }} onMouseOut={() => {
      document.querySelector('.chart .zoom-btn').style.display = 'none';
    }} className="chart">
      <footer>
        <button className="arrow" onClick={() => {
          const newPeriod = period === 0 ? 1 : 0;
          setPeriodInfo(newPeriod);
          props.changeCondition(newPeriod, status, numeration);
        }}>
          <span className="arr-icon material-icons">
            arrow_left
    </span>
        </button>
        <div>{periods[period]}</div>
        <button className="arrow" onClick={() => {
          const newPeriod = period === 1 ? 0 : 1;
          setPeriodInfo(newPeriod);
          props.changeCondition(newPeriod, status, numeration);
        }}>
          <span className="arr-icon material-icons">
            arrow_right
    </span>
        </button>
      </footer>
      <h3>{props.country}</h3>
      <div className="chart-content" style={{
        width: 400,
        height: 100,
        margin: 0,
        backgroundColor: ('#222222'),
      }}>
        {<Line options={props.info.options}
          data={props.info.data} />}
        <button className="zoom-btn">
          <span className="zoom-out material-icons ">
            zoom_out_map
      </span>
        </button>
        <footer>
          <button className="arrow" onClick={() => {
            let newStatus = status;
            if (status === 0) {
              newStatus = 2;
            } else {
              newStatus -= 1;
            }
            setStatusInfo(newStatus);
            props.changeCondition(period, newStatus, numeration);
          }}>
            <span className=" arr-icon material-icons">
              arrow_left
            </span>
          </button>
          <div>{statusArr[status]}</div>
          <button className="arrow" onClick={() => {
            let newStatus = status;
            if (status === 2) {
              newStatus = 0;
            } else {
              newStatus += 1;
            }
            setStatusInfo(newStatus);
            props.changeCondition(period, newStatus, numeration);
          }}>
            <span className="arr-icon material-icons">
              arrow_right
            </span>
          </button>
        </footer>
        <footer>
          <button className="arrow" onClick={() => {
            const newNumeration = numeration === 0 ? 1 : 0;
            setNumeration(newNumeration);
            props.changeCondition(period, status, newNumeration);
          }}>
            <span className="arr-icon material-icons">
              arrow_left
    </span>
          </button>
          <div>{numbers[numeration]}</div>
          <button className="arrow" onClick={() => {
            const newNumeration = numeration === 1 ? 0 : 1;
            setNumeration(newNumeration);
            props.changeCondition(period, status, newNumeration);
          }}>
            <span className="arr-icon material-icons">
              arrow_right
    </span>
          </button>
        </footer>
      </div>

    </div>
  );
};

export default Chart4;
