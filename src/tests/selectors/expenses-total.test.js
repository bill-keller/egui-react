import moment from 'moment';
import selectExpensesTotal from '../../selectors/expenses-total';

const expenses = [{
  id: 1,
  description: 'gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: 2,
  description: 'rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: 3,
  description: 'credit card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
})

test('should add up multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
})

test('should add up one expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
})