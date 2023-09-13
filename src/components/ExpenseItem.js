import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from "./ExpenseDeatils";


function ExpenseItem(props) {
  return (
    <div >      
      <div className="expense-item"> 
        <ExpenseDate expenseDate={props.expenseDate}/>
        <ExpenseDetails expenseTitle={props.expenseTitle}
          expenseAmount={props.expenseAmount}
          locationOfExpenditure={props.locationOfExpenditure}/>
      </div>   
    </div>
  );
}

export default ExpenseItem;
