import getBudgetObject from './7-getBudgetObject.js';

/**
 * Returns the full budget object with additional methods.
 * @param {number} income - The income value.
 * @param {number} gdp - The GDP value.
 * @param {number} capita - The capita value.
 * @returns {Object} - The full budget object.
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    /**
     * Returns the income value in dollars.
     * @param {number} income - The income value.
     * @returns {string} - The income value in dollars.
     */
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    /**
     * Returns the income value in euros.
     * @param {number} income - The income value.
     * @returns {string} - The income value in euros.
     */
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
