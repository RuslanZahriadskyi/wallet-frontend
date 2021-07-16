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

const actions = {
  fetchStatisticsRequest,
  fetchStatisticsSuccess,
  fetchStatisticsError,

  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
};

export default actions;
