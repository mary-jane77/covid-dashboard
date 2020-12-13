import React, { useState } from 'react';
import './table1.scss'

export const Table1 = (props) => {
  const [status, setStatusInfo] = useState(0)
  const [period, setPeriodInfo] = useState(0)

console.log('wefweg', props.info)
  return (
    <div className="table1">
    <footer>
    <button className="arrow" onClick={() => {
      if(period===0){
        setPeriodInfo(1)
      }else{
        setPeriodInfo(0)
      }
      props.updateData(period, status)
    }}>
      <span class="material-icons">
        arrow_left
        </span>
    </button>
    <div>{props.periodInfo[period]}</div>
    <button className="arrow" onClick={() => {
      if(period===1){
        setPeriodInfo(0)
      }else{
        setPeriodInfo(1)
      }
      props.updateData(period, status)
    }}>
      <span class="material-icons">
        arrow_right
        </span>
    </button>
  </footer>
      <div className="table1-content-wrapper">
        <header className="h" >
          <div>{props.info[1][0].textline}</div>
          <h3 className="num1">{props.info[1][0].global}</h3>
          <h5 className="col1">absolute number</h5>
          <h3 className="num2">{props.info[1][0].global/100000}</h3>
          <h5 className="col2">value per 100 th.</h5>

        </header>
        <div className="death-table-content">
        {console.log(props.info)}
          {props.info[0].map((el,i) => (
            <div key={i}>
              <div className="row">

              <div className="num1"><span >{el.info}</span><span>  {props.info[1][0].rowText}</span></div>
              <div className="num2"><span>{el.info/100000}</span><span>  {props.info[1][0].rowText}</span></div>
                <h3 className="country">{el.country}</h3>
              </div>
              <hr />
            </div>
          )
          )}
        </div>
      </div>

      <footer>
        <button className="arrow" onClick={() => {
          if(status===0){
            setStatusInfo(2)

          }else{
            setStatusInfo(status-1)
          }
          props.updateData( period, status)
        }}>
          <span class="material-icons">
            arrow_left
            </span>
        </button>
        <div>{props.statusInfo[status]}</div>
        <button className="arrow" onClick={() => {
          if(status===2){
            setStatusInfo(0)
          }else{
            setStatusInfo(status+1)
          }
          props.updateData( period, status)
        }}>
          <span class="material-icons">
            arrow_right
            </span>
        </button>
      </footer>
    </div>


  );
}


