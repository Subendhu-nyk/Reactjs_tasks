import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 9, 13);
  const expenseTitle = "Food";
  const expenseAmount = 10;
  const locationOfExpenditure="Hotel"
  
  const formattedDate = expenseDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div >
      <div className="expense-item">
        <div className="expense-item__description">
          <h1>Expense Item!</h1>
        </div>
      </div>

      <div className="expense-item"> 
        <div>{formattedDate}</div>
        <div className="expense-item__description">
          <h3>{expenseTitle}</h3>      
          <h3>{locationOfExpenditure}</h3>   
        <div className="expense-item__price">
          <p>Rs{expenseAmount}</p>
        </div>
        </div>
      </div>
      <div className="expense-item"> 
        <div>{formattedDate}</div>
        <div className="expense-item__description">
          <h3>{expenseTitle}</h3>  
          <h3>{locationOfExpenditure}</h3>       
        <div className="expense-item__price">
          <p>Rs{expenseAmount}</p>
        </div>
        </div>
      </div>
      <div className="expense-item"> 
        <div>{formattedDate}</div>
        <div className="expense-item__description">
          <h3>{expenseTitle}</h3>   
          <h3>{locationOfExpenditure}</h3>      
        <div className="expense-item__price">
          <p>Rs{expenseAmount}</p>
        </div>
        </div>
      </div>
     
    
    </div>
  );
}

export default ExpenseItem;
