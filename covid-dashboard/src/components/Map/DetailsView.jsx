import React from 'react';

const totalKeyArray = ['confirmed', 'deaths'];

function DetailsView(props) {
  const {
    location: { country, province, latest },
    onClickClose,
  } = props;

  let title = country;
  if (province !== '' && province !== country) {
    title = `${province}, ${country}`;
  }

  const totalElements = totalKeyArray.map((key) => {
    const count = latest[key];
    return (
      <div key={key} className="table2">
        <tr className='tr_table'>
          <td className="td_col">
            <h6 className="tit">{key}</h6>
          </td>
          <td className="td_col">
            <p className="td_count">{count}</p>
          </td>
        </tr>
      </div>
    );
  });

  return (
    <div className="details-view">
      <div className="details-view-close" onClick={onClickClose}>&times;</div>
      <div className="details-view-content">
        <h4 className="title_details">{title}</h4>
        {totalElements}
      </div>
    </div>
  );
}
export default DetailsView;
