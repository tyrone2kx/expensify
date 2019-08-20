import expenses from '../fixtures/expenses';
import getExpenseTotal from '../../selectors/expenses-total';


test('should return 0 if no expense', () => {   
    const result = getExpenseTotal([]);
    expect(result).toBe(0);
});


test('should return total of expenses', () => {   
    const result = getExpenseTotal(expenses);
    expect(result).toBe(114195);
});


test('should return total of one expense', () => {   
    const result = getExpenseTotal([ expenses[0] ]);
    expect(result).toBe(195);
});