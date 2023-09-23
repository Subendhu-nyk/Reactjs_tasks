// App.js
import React,{useState} from 'react';

import ExpenseDetails from './components/Expenses/ExpenseDetails';
import NewExpense from './components/NewExpense/NewExpense';
 
import './components/Expenses/ExpenseItem.css'

const App=()=> {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 9, 13),
      title: "Food",
      amount: 50,
      locationOfExpenditure: "Hotel",
    },
    // {
    //   id: 'e2',
    //   date: new Date(2023, 9, 13),
    //   title: "Petrol",
    //   amount: 100,
    //   locationOfExpenditure: "Petrol Pump",
    // },
    // {
    //   id: 'e3',
    //   date: new Date(2023, 9, 13),
    //   title: "Movies",
    //   amount: 200,
    //   locationOfExpenditure: "Inox",
    // }
  ];
  const [expense, setExpense] = useState(expenses);

  const addExpenseHandler=(expense)=>{
    setExpense((prevExpense)=>{
      return[expense,...prevExpense];
    }) 
    console.log('in App.js')
    console.log(expense)
  }

  return (
    <div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h1>Expense Item!</h1>
        </div>
      </div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <ExpenseDetails expenses={expense} />
      </div>
    </div>
  );
}

export default App;
