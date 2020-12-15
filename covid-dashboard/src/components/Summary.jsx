import React from 'react';
import InfoBox from './InfoBox.jsx';
/** @function Summary  */

function Summary(props) {
  const {
    totalConfirmed,
    // totalRecovered,
    // totalDeaths,
    // country,
  } = props;

  return (
        < div className='block_global'>
             <InfoBox
              title="Global Cases"
              total ={totalConfirmed}
                                     />
         <h4>{new Date().toDateString()}</h4>

                     {/* <h4>Total Confirmed</h4>
                      <h1>{totalConfirmed}</h1>

                         <div className='NewDeaths'>
                        <h4>NewDeaths</h4>
                        <h1>{}</h1>
                      </div> */}
                            {/* <h4>TotalRecovered</h4>
                             <h1>{totalRecovered}</h1>
                              <h4>TotalDeaths</h4>
                              <h1>{totalDeaths}</h1> */}
            </div>
  );
}
export default Summary;
