import React from 'react';
import '../styles/table1.scss';

const Table1p2 = (props) => (
  <div className="clone table1" onMouseOver={() => {
    document.querySelector('.clone .zoom-btn').style.display = 'block';
  }} onMouseOut={() => {
    document.querySelector('.clone .zoom-btn').style.display = 'none';
  }}>
    <button className="zoom-btn">
      <span className="zoom-out material-icons ">
        zoom_out_map
    </span>
    </button>
    <div className="table1-content-wrapper">
      <header >
        <h2>{props.info.country}</h2>
        <h5 className="col1">absolute number</h5>
        <h5 className="col2">per 100 th.</h5>
      </header>
      <div className="second-table-content">
        <div >
          <div className="row">
            <h3 className="country"> New Confirmed</h3>
            <div className="num1"><span >{props.info.NewConfirmed}</span></div>
            <div className="num2"><span>{Math.trunc((props.info.NewConfirmed * 100000) / props.population)}</span></div>
          </div>
          <hr />
        </div>
        <div >
          <div className="row">
            <h3 className="country">Total Confirmed</h3>
            <div className="num1"><span >{props.info.TotalConfirmed}</span></div>
            <div className="num2"><span>{Math.trunc((props.info.TotalConfirmed * 100000) / props.population)}</span></div>
          </div>
          <hr />
        </div>
        <div >
          <div className="row">
            <h3 className="country">New Deaths</h3>
            <div className="num1"><span >{props.info.NewDeaths}</span></div>
            <div className="num2"><span>{Math.trunc((props.info.NewDeaths * 100000) / props.population)}</span></div>
          </div>
          <hr />
        </div>
        <div >
          <div className="row">
            <h3 className="country"> Total Deaths</h3>
            <div className="num1"><span >{props.info.TotalDeaths}</span></div>
            <div className="num2"><span>{Math.trunc((props.info.TotalDeaths * 100000) / props.population)}</span></div>

          </div>
          <hr />
        </div>
        <div >
          <div className="row">
            <h3 className="country "> New Recovered</h3>
            <div className="num1 green"><span >{props.info.NewRecovered}</span></div>
            <div className="num2 green"><span>{Math.trunc((props.info.NewRecovered * 100000) / props.population)}</span></div>

          </div>
          <hr />
        </div>
        <div >
          <div className="row">
            <h3 className="country "> Total Recovered</h3>
            <div className="num1 green"><span >{props.info.TotalRecovered}</span></div>
            <div className="num2 green"><span>{Math.trunc((props.info.TotalRecovered * 100000) / props.population)}</span></div>

          </div>
          <hr />
        </div>

      </div>
    </div>
  </div>
);
export default Table1p2;
