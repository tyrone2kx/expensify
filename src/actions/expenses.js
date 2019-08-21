import uuid from 'uuid';
import database from '../firebase/firebase';



// ADD_EXPENSE ACTION GENERATOR

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});



// START ADD EXPENSE

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData; // this is same as setting the defaults inside the arguement brackets

        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
}






// REMOVE_EXPENSE ACTION GENERATOR

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id // id: id
    
});


// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
