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
            <div key={key} className="columns">
                <div className="column">
                    <h6 className="title-details">{key}</h6>
                </div>
                <div className="column">
                    <p className="has-text-right-details">{count}</p>
                </div>
            </div>
    );
  });

  return (
        <div className="details-view">
            <div className="details-view-close" onClick={onClickClose}>&times;</div>
            <div className="details-view-content">
                <h4 className="title is-4">{title}</h4>
                {totalElements}
            </div>
        </div>
  );
}

export default DetailsView;
