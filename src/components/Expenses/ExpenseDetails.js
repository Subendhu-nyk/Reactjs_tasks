
import React from "react";
import "./ExpenseDetails.css";
import Card from '../UI/card';
import ExpenseItem from "./ExpenseItem";


const ExpenseDetails=(props)=> {
  return (   
    <Card className="expenses">
        {props.expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          locationOfExpenditure={expense.locationOfExpenditure}
          date={expense.date}

        />
      ))}
    </Card>
  );
}

export default ExpenseDetails;
