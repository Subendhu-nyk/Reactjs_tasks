import React,{useState} from "react";
 
import './ExpenseForm.css' 

function ExpenseForm(){

    const[item,setItem]=useState('enter')
    const onclickHandler1=(event)=>{
        console.log(event.target.value)
    }
    const onclickHandler2=(event)=>{
        console.log(event.target.value)
    }
    const onclickHandler3=(event)=>{
        console.log(event.target.value)
    }



    return(<div>
        <form>
            <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Expense Item</label>
            <input onChange={onclickHandler1} type="text"/>
            </div>
            <div className="new-expense__control">
            <label>Expenditure Location</label>
            <input onChange={onclickHandler2} type="text"/>
            </div>
            <div className="new-expense__control">
            <label>Expense Amount</label>
            <input onChange={onclickHandler3}  type="text"/>
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input  type="date" min="2023-09-09" max="2024-12-31"/>
            </div>           
            </div>
            <div className="new-expense__actions">
            <button type="submit">Submit</button>
            </div>
        </form>
    </div>)
}

export default ExpenseForm