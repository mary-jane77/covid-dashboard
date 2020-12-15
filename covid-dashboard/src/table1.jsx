import React, { useState } from 'react';
import './table1.scss';

const Table1 = (props) => {
  const [status, setStatusInfo] = useState(0);
  const [period, setPeriodInfo] = useState(0);
  const [visibleData, setVisibleData] = useState(props.info);

  const handleClick = (p, s) => {
    const data = props.filterData(p, s);
    setVisibleData(data);
    if (s === 2) {
      document.querySelectorAll('.main-table-p1 .num1').forEach((e) => e.classList.add('green'));
      document.querySelectorAll('.main-table-p1 .num2').forEach((e) => e.classList.add('green'));
    } else {
      document.querySelectorAll('.main-table-p1 .num1').forEach((e) => e.classList.remove('green'));
      document.querySelectorAll('.main-table-p1 .num2').forEach((e) => e.classList.remove('green'));
    }
  };

  const handleMenuClick = (country) => {
    props.findCountry(country);
  };

  return (
    <div className="table1 main-table-p1">
      <footer>
        <button className="arrow" onClick={() => {
          if (period === 0) {
            setPeriodInfo(1);
          } else {
            setPeriodInfo(0);
          }
          handleClick(period, status);
        }}>
          <span class="material-icons">
            arrow_left
        </span>
        </button>
        <div>{props.periodInfo[period]}</div>
        <button className="arrow" onClick={() => {
          if (period === 1) {
            setPeriodInfo(0);
          } else {
            setPeriodInfo(1);
          }
          handleClick(period, status);
        }}>
          <span class="material-icons">
            arrow_right
        </span>
        </button>
      </footer>
      <div className="table1-content-wrapper">
        <header className="h" >
          <div>{visibleData[1][0].textline}</div>
          <h3 className="num1">{visibleData[1][0].global}</h3>
          <h5 className="col1">absolute number</h5>
          <h3 className="num2">{(visibleData[1][0].global / 100000).toFixed(4)}</h3>
          <h5 className="col2">value per 100 th.</h5>

        </header>
        <div className="death-table-content">
          {visibleData[0].map((el, i) => (
            <div key={i}>
              <div className="row" >
                <div className="num1"><span >{el.info}</span><span>  {visibleData[1][0].rowText}</span></div>
                <div className="num2"><span>{(el.info / 100000).toFixed(4)}</span><span>  {visibleData[1][0].rowText}</span></div>
                <h3 className="country" onClick={(e) => {
                  e.preventDefault();
                  if (!e.target.closest('.row')) return;
                  handleMenuClick(e.target.closest('h3').textContent);
                }}>{el.country}</h3>
              </div>
              <hr />
            </div>
          ))};
        </div>
      </div>

      <footer>
        <button className="arrow" onClick={() => {
          if (status === 0) {
            setStatusInfo(2);
          } else {
            setStatusInfo(status - 1);
          }
          handleClick(period, status);
        }}>
          <span class="material-icons">
            arrow_left
            </span>
        </button>
        <div>{visibleData[1][0].textline}</div>
        <button className="arrow" onClick={() => {
          if (status === 2) {
            setStatusInfo(0);
          } else {
            setStatusInfo(status + 1);
          }
          handleClick(period, status);
        }}>
          <span class="material-icons">
            arrow_right
            </span>
        </button>
      </footer>
    </div>
  );
};

export default Table1;
