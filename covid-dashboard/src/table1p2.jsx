import React from 'react';
import './table1.scss';

const Table1p2 = (props) => (
  <div className="clone table1">
  <div className="table1-content-wrapper">
    <header >
      <h2>{props.info.country}</h2>
      <h5 className="col1">absolute number</h5>
      <h5 className="col2">value per 100 th.</h5>
    </header>
    <div className="second-table-content">
      <div >
        <div className="row">
          <h3 className="country"> New Confirmed</h3>
          <div className="num1"><span >{props.info.NewConfirmed}</span></div>
          <div className="num2"><span>{(props.info.NewConfirmed / 100000).toFixed(4)}</span></div>
        </div>
        <hr />
      </div>
      <div >
        <div className="row">
          <h3 className="country">Total Confirmed</h3>
          <div className="num1"><span >{props.info.TotalConfirmed}</span></div>
          <div className="num2"><span>{(props.info.TotalConfirmed / 100000).toFixed(4)}</span></div>
        </div>
        <hr />
      </div>
      <div >
        <div className="row">
          <h3 className="country">New Deaths</h3>
          <div className="num1"><span >{props.info.NewDeaths}</span></div>
          <div className="num2"><span>{(props.info.NewDeaths / 100000).toFixed(4)}</span></div>
        </div>
        <hr />
      </div>
      <div >
        <div className="row">
          <h3 className="country"> Total Deaths</h3>
          <div className="num1"><span >{props.info.TotalDeaths}</span></div>
          <div className="num2"><span>{(props.info.TotalDeaths / 100000).toFixed(4)}</span></div>

        </div>
        <hr />
      </div>
      <div >
        <div className="row">
          <h3 className="country "> New Recovered</h3>
          <div className="num1 green"><span >{props.info.NewRecovered}</span></div>
          <div className="num2 green"><span>{(props.info.NewRecovered / 100000).toFixed(4)}</span></div>

        </div>
        <hr />
      </div>
      <div >
        <div className="row">
          <h3 className="country "> Total Recovered</h3>
          <div className="num1 green"><span >{props.info.TotalRecovered}</span></div>
          <div className="num2 green"><span>{(props.info.TotalRecovered / 100000).toFixed(4)}</span></div>

        </div>
        <hr />
      </div>

    </div>
  </div>
</div>
);

export default Table1p2;
