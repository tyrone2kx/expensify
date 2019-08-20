import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpenseSummary = ({ count, total }) => {

        return (
            <div>
                <h1>Viewing {count} {count > 1 ? 'expenses' : 'expense'} totaling {numeral(total / 100).format('$0,0.00')} </h1>
            </div>
        );
    
}


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        count: selectExpenses(state.expenses, state.filters).length,
        total: getExpenseTotal(selectExpenses(state.expenses, state.filters))
    }
}

export default connect(mapStateToProps)(ExpenseSummary);