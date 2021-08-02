const getItems = state => state.statistics.items;

const getIncome = state => state.statistics.income;
const getOutlay = state => state.statistics.outlay;
const getBalance = state => state.statistics.balance;

const statisticsSelectors = {
  getItems,
  getIncome,
  getOutlay,
  getBalance,
};

export default statisticsSelectors;
