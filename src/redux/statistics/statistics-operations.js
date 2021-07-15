import axios from 'axios';
import actions from './statisticts-actions';

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWNjNThiZWZlMDVhNmNjMGRlYmIyOSIsImlhdCI6MTYyNjI4MTE0MCwiZXhwIjoxNjI2MzE3MTQwfQ.iD6lEqcPxnWINBfmFikdkLZbjbJWw5aj5ukTrDiW_T8';

// axios.defaults.baseURL = 'https://own-wallet.herokuapp.com';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const fetchStatistics = (month, year) => async dispatch => {
  dispatch(actions.fetchStatisticsRequest());

  try {
    const {
      data: { statistics },
    } = await axios.get(`/api/operations/statistics/${month}/${year}`);
    console.log(statistics);
    dispatch(actions.fetchStatisticsSuccess(statistics));
  } catch (e) {
    dispatch(actions.fetchStatisticsError(e.message));
  }
};

const fetchCategories = () => async dispatch => {
  dispatch(actions.fetchCategoriesRequest());

  try {
    const {
      data: {
        response: { categories },
      },
    } = await axios.get('/api/category');
    dispatch(actions.fetchCategoriesSuccess(categories));
  } catch (e) {
    dispatch(actions.fetchCategoriesError(e.message));
  }
};

const fetchBalance = () => async dispatch => {
  dispatch(actions.fetchBalanceRequest());

  try {
    const {
      data: {
        response: { totalBalance },
      },
    } = await axios.get('/api/operations');
    dispatch(actions.fetchBalanceSuccess(totalBalance));
  } catch (e) {
    dispatch(actions.fetchBalanceError(e.message));
  }
};

const statisticOperations = { fetchStatistics, fetchCategories, fetchBalance };

export default statisticOperations;
