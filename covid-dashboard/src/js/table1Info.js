export const periodInfo = ['Whole period', 'Latest day'];
export const statusInfo = ['Global cases', 'Global deaths', 'Global recovered'];

export const filterInfo = (information, period, status) => {
  let result = [];
  const filteredInfo = [];
  const globalInfo = [];
  const global = information.Global;
  const info = information.Countries;
  if (status === 0 && period === 0) {
    info.forEach((el) => {
      const countryInfo = {
        country: el.Country,
        info: el.TotalConfirmed,
      };
      filteredInfo.push(countryInfo);
    });

    globalInfo.push({
      global: global.TotalConfirmed,
      textline: 'Global Cases',
      rowText: 'cases',
    });
  } else if (status === 0 && period === 1) {
    info.forEach((el) => {
      const countryInfo = {
        country: el.Country,
        info: el.NewConfirmed,

      };
      filteredInfo.push(countryInfo);
    });
    globalInfo.push({
      global: global.NewConfirmed,
      textline: 'Global Cases',
      rowText: 'cases',
    });
  } else if (status === 1 && period === 0) {
    info.forEach((el) => {
      const countryInfo = {
        country: el.Country,
        info: el.TotalDeaths,

      };
      filteredInfo.push(countryInfo);
    });
    globalInfo.push({
      global: global.TotalDeaths,
      textline: 'Global Deaths',
      rowText: 'deaths',
    });
  } else if (status === 1 && period === 1) {
    info.forEach((el) => {
      const countryInfo = {
        country: el.Country,
        info: el.NewDeaths,
      };
      filteredInfo.push(countryInfo);
    });
    globalInfo.push({
      global: global.NewDeaths,
      textline: 'Global Deaths',
      rowText: 'deaths',
    });
  } else if (status === 2 && period === 0) {
    info.forEach((el) => {
      const countryInfo = {
        country: el.Country,
        info: el.TotalRecovered,
      };
      filteredInfo.push(countryInfo);
    });
    globalInfo.push({
      global: global.TotalRecovered,
      textline: 'Global Recovery',
      rowText: 'recovered',
    });
  } else if (status === 2 && period === 1) {
    info.forEach((el) => {
      const countryInfo = {
        country: el.Country,
        info: el.NewRecovered,
      };
      filteredInfo.push(countryInfo);
    });
    globalInfo.push({
      global: global.NewRecovered,
      textline: 'Global Recovery',
      rowText: 'recovered',
    });
  }
  filteredInfo.sort((a, b) => ((a.info < b.info) ? 1 : -1));
  result = [filteredInfo, globalInfo];

  return result;
};

export const findCountryInfo = (information, country) => {
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
