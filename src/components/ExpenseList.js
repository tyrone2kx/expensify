import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (<p>No Expenses</p>) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
             })
        )
    }
     
    </div>
);


// this function defines what we want to get back from the store

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}


// This kinda acts like the HOC. It passes the result from above to the second arguement (Component)

export default connect(mapStateToProps)(ExpenseList);


 