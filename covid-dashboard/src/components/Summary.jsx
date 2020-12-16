import React from 'react';
import axios from '../axios';
import InfoBox from './InfoBox';
/** @function Summary  */

function Summary() {
  const [totalConfirmed, setTotalConfirmed] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios.get('/summary')
      .then((res) => {
        setLoading(false);

        if (res.status === 200) {
          setTotalConfirmed(res.data.Global.TotalConfirmed);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <p> Fetching!!! </p>;
  }

  return (
<div>
        < div className='block_global'>
             <InfoBox
              title="Global Cases"
              total ={totalConfirmed}
                                     />
         <h4>{new Date().toDateString()}</h4>
            </div>
</div>
  );
}
export default Summary;
