import { createAction } from '@reduxjs/toolkit';

const fetchStatisticsRequest = createAction(
  'statistics/fetchStatisticsRequest',
);
const fetchStatisticsSuccess = createAction(
  'statistics/fetchStatisticsSuccess',
);
const fetchStatisticsError = createAction('statistics/fetchStatisticsError');

const fetchBalanceRequest = createAction('balance/fetchBalanceRequest');
const fetchBalanceSuccess = createAction('balance/fetchBalanceSuccess');
const fetchBalanceError = createAction('balance/fetchBalanceError');

const resetStatistics = createAction('statistics/resetStatistics');

const actions = {
  fetchStatisticsRequest,
  fetchStatisticsSuccess,
  fetchStatisticsError,

  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
  resetStatistics,
};

export default actions;
