import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.statistics.items;
const getCategories = state => state.statistics.categories;

const getIncome = state => state.statistics.income;
const getOutlay = state => state.statistics.outlay;
const getBalance = state => state.statistics.balance;

const statisticsSelectors = {
  getItems,
  getCategories,
  getIncome,
  getOutlay,
  getBalance,
};

export default statisticsSelectors;
