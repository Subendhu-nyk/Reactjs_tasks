import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }
  

  return (
    <ul className='expenses-list'>
      {props.items.length > 1 ? (
        <div>
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              locationOfExpenditure={expense.locationOfExpenditure}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </div>
      ) : (
        <div>
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              locationOfExpenditure={expense.locationOfExpenditure}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
          <h2 className='expenses-list__fallback'>Only single Expense here.</h2>
        </div>
      )}
    </ul>
  );
};

export default ExpensesList;