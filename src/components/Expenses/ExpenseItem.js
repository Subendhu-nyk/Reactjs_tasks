import React,{useState} from "react";

import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/card";


const ExpenseItem=(props)=> {


  // let deleteButton=()=>{
  //   console.log('clicked')
  // }
  const [title,setTitle]=useState(props.title); 
  const [amount,setAmount]=useState(props.amount)
   const clickHandler=()=>{
    setTitle('updated')
    console.log(title)
   }
   const clickHandler2=()=>{
    setAmount(amount+100)
    console.log(amount)
   }


    return (       
      <Card className="expense-item"> 
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
        <h2>{title}</h2>
        <h2>{props.locationOfExpenditure}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button className='expense-item__price' onClick={clickHandler2}>Update Expense</button>
        {/* <button className='expense-item__delete' onClick={deleteButton}>Delete</button> */}
        <button className='expense-item__delete' onClick={clickHandler}>Change Title</button>
        </div>
      </Card>    
  );
}

export default ExpenseItem;
