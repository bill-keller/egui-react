import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const ExpenseSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';  
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Cart contains <span>{expenseCount} devices</span> totalling: <span>{formattedExpenseTotal}</span></h1>
      <div className="page-header_actions">
        <Link className="button" to ="/dashboard">Add Device</Link>
      </div>
    </div>
    
  </div>
)};

        // <Link className="button" to ="/create">Add Device</Link> 

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
