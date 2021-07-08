import axios from 'axios';

const fetchRates = () => {
  return axios
    .get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(response => response.data)
    .catch(error => error);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchRates };
