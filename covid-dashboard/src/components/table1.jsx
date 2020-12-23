import React, { useState } from 'react';
import '../styles/table1.scss';

const Table1 = (props) => {
  const [status, setStatusInfo] = useState(props.status);
  const [period, setPeriodInfo] = useState(props.period);

  const handleClick = (p, s) => {
    props.changeCondition(p, s);
    if (s === 2) {
      document.querySelectorAll('.main-table-p1 .num1').forEach((e) => e.classList.add('green'));
      document.querySelectorAll('.main-table-p1 .num2').forEach((e) => e.classList.add('green'));
    } else {
      document.querySelectorAll('.main-table-p1 .num1').forEach((e) => e.classList.remove('green'));
      document.querySelectorAll('.main-table-p1 .num2').forEach((e) => e.classList.remove('green'));
    }
  };

  const handleMenuClick = (country) => {
    props.changeCondition(period, status);
    props.findCountry(country);
  };

  return (
    <div className="table1 main-table-p1" onMouseOver={() => {
      document.querySelector('.table1 .zoom-btn').style.display = 'block';
    }} onMouseOut={() => {
      document.querySelector('.table1 .zoom-btn').style.display = 'none';
    }}>
      <button className="zoom-btn zoom-btn1">
        <span className="zoom-out material-icons ">
          zoom_out_map
      </span>
      </button>
      <footer>
        <button className="arrow" onClick={() => {
          const newPeriod = period === 0 ? 1 : 0;
          setPeriodInfo(newPeriod);
          handleClick(newPeriod, status);
        }}>
          <span className="arr-icon material-icons">
            arrow_left
        </span>
        </button>
        <div>{props.periodInfo[period]}</div>
        <button className="arrow" onClick={() => {
          const newPeriod = period === 1 ? 0 : 1;
          setPeriodInfo(newPeriod);
          handleClick(newPeriod, status);
        }}>
          <span className="arr-icon material-icons">
            arrow_right
        </span>
        </button>
      </footer>
      <div className="table1-content-wrapper">
        <header className="h" >
          <div>{props.info[1][0].textline}</div>
          <h3 className="num1">{props.info[1][0].global}</h3>
          <h5 className="col1">absolute number</h5>
          <h3 className="num2">{Math.trunc((props.info[1][0].global * 100000) / 7827000000)}</h3>
          <h5 className="col2">per 100 th.</h5>

        </header>
        <div className="death-table-content">
          {props.info[0].map((el, i) => (
            <div key={i}>
              <div className="row" >
                <div className="num1"><span >{el.info}</span><span>  {props.info[1][0].rowText}</span></div>
                <div className="num2"><span>{Math.trunc((el.info * 100000) / 7827000000)}</span><span>  {props.info[1][0].rowText}</span></div>
                <h3 className="country btn" onClick={(e) => {
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
          let newStatus = status;
          if (status === 0) {
            newStatus = 2;
          } else {
            newStatus = status - 1;
          }
          setStatusInfo(newStatus);
          handleClick(period, newStatus);
        }}>
          <span className=" arr-icon material-icons">
            arrow_left
            </span>
        </button>
        <div>{props.info[1][0].textline}</div>
        <button className="arrow" onClick={() => {
          let newStatus = status;
          if (status === 2) {
            newStatus = 0;
          } else {
            newStatus = status + 1;
          }
          setStatusInfo(newStatus);
          handleClick(period, newStatus);
        }}>
          <span className="arr-icon material-icons">
            arrow_right
            </span>
        </button>
      </footer>
    </div>
  );
};

export default Table1;
