import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/card";


const ExpenseItem=(props)=> {
    return (       
      <Card className="expense-item"> 
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2>{props.locationOfExpenditure}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>    
  );
}

export default ExpenseItem;
