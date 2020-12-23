const findCountryInfo = (information, country) => {
  let countryInfo = {};
  const info = information.Countries;
  info.forEach((el) => {
    if (el.Country === country) {
      countryInfo = {
        country: el.Country,
        NewConfirmed: el.NewConfirmed,
        TotalConfirmed: el.TotalConfirmed,
        NewDeaths: el.NewDeaths,
        TotalDeaths: el.TotalDeaths,
        NewRecovered: el.NewRecovered,
        TotalRecovered: el.TotalRecovered,
      };
    }
  });
  return countryInfo;
};

export default findCountryInfo;
