import React from 'react';
/** @function Summary  */

function Summary(props) {
  const {
    totalConfirmed,
    totalRecovered,
    totalDeaths,
    country,
  } = props;

  return (
        < div className='row' >
        < div className = 'NewConfirmed' >
        < h3> Countries </h3 >
        <h1>{country}</h1>
                      <h4>{new Date().toDateString()}</h4>
                      </div>
                   <div className='TotalConfirmed'>
                     <h4>Total Confirmed</h4>
                      <h1>{totalConfirmed}</h1>
                        </div>

                        {/* <div className='NewDeaths'>
                        <h4>NewDeaths</h4>
                        <h1>{}</h1>
                      </div> */}

                      <div className='TotalRecovered'>
                           <h4>TotalRecovered</h4>
                             <h1>{totalRecovered}</h1>
                    </div>

                      <div className='TotalDeaths'>
                              <h4>TotalDeaths</h4>
                             <h1>{totalDeaths}</h1>
                   </div>
            </div>

  );
}
export default Summary;
