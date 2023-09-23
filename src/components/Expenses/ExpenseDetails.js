
import React,{useState} from "react";
import "./ExpenseDetails.css";
import Card from '../UI/card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
// import ExpenseItem from "./ExpenseItem";


const ExpenseDetails=(props)=> {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (   
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* {props.expenses.map((expense) => (          
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          locationOfExpenditure={expense.locationOfExpenditure}
          date={expense.date}

        />
      ))} */}
       <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default ExpenseDetails;
