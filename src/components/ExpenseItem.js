import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <div >      

      <div className="expense-item"> 
        <div>{props.expenseDate.toISOString()}</div>
        <div className="expense-item__description">
          <h3>{props.expenseTitle}</h3>      
          <h3>{props.locationOfExpenditure}</h3>   
        <div className="expense-item__price">
          <p>Rs{props.expenseAmount}</p>
        </div>
        </div>
      </div>   
    </div>
  );
}

export default ExpenseItem;
