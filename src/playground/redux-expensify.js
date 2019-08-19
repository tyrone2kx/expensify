import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'



// ADD_EXPENSE ACTION GENERATOR

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description, // description : description
        note,
        amount,
        createdAt

    }
});


// REMOVE_EXPENSE ACTION GENERATOR

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id // id: id
    
});


// EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


// SET TEXT FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})


// SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});


// SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});


// SET_START_DATE

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})


// SET_END_DATE

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})


// ================================================================ END ACTION GENERATORS ================================================================================








// ================================================================= START REDUCERS ======================================================================================

// EXPENSE REDUCER

const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense) [this can be achieved using the es6 spread operator asshown below. It doesn't change the original state.]
            return [...state, action.expense]
        
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense; // as good as saying "do nothing!"
                }
            });

    default:
        return state;
    }

}



// FILTERS REDUCER

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            };
        
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    }

}



// ================================================================== END REDUCERS =============================================================================================




// GET VISIBLE EXPENSES

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {

        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; 
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b) => {

        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }

        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }

    });
    
}





// STORE CREATION (with multiple reducers)

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description : 'rent', amount : 200, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({description : 'coffee', amount : 700, createdAt: -1000 }));



// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 3000 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


















const demoState = {
    expenses: [{
        id: 'dfghjklfghjk',
        description: 'June rent',
        note: 'This was the final rent payment',
        amount: 54000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};