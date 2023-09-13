import ExpenseItem from './components/ExpenseItem'; 

import "./components/ExpenseItem.css"

function App() {



  const items=[ {expenseDate : new Date(2023, 9, 13),
     expenseTitle : "Food",
     expenseAmount : 50,
     locationOfExpenditure:"Hotel" } ,
     {expenseDate : new Date(2023, 9, 13),
      expenseTitle : "Petrol",
      expenseAmount : 100,
      locationOfExpenditure:"Petrol Pump" },
      {expenseDate : new Date(2023, 9, 13),
        expenseTitle : "Movies",
        expenseAmount : 200,
        locationOfExpenditure:"Inox" }
    ]

  return (
    <div> 
      <div className="expense-item">
        <div className="expense-item__description">
          <h1>Expense Item!</h1>
        </div>
      </div>
      <div>
      {items.map((item, index) => (
        <ExpenseItem          
          expenseTitle={item.expenseTitle}
          expenseAmount={item.expenseAmount}
          expenseDate={item.expenseDate}
          locationOfExpenditure={item.locationOfExpenditure}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
