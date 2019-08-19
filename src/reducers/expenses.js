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



export default expenseReducer;