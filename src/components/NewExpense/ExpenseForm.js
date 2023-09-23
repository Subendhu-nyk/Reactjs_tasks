import React,{useState} from "react";
 
import './ExpenseForm.css' 

function ExpenseForm(props){

    const[title,setTitle]=useState('')
    const [locationOfExpenditure,setLocationOfExpenditure]=useState('')
    const [amount,setAmount]=useState('')
    const [date,setDate]=useState('')
    // const [userInput,setUserInput]=useState({
    //     enteredItem:"",
    //     enteredLoc:"",
    //     enteredAmount:"",
    //     enteredDate:""
    // })
    const onclickHandler1=(event)=>{
        setTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredItem:event.target.value,
        // })
        // setUserInput((prevState)=>{
        //    return{ ...prevState,
        //     enteredItem:event.target.value,}
        // })
    }
    const onclickHandler2=(event)=>{
        setLocationOfExpenditure(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredLoc:event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return{ ...prevState,
        //         enteredLoc:event.target.value,}
        //  })
    }
    const onclickHandler3=(event)=>{
        setAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return{ ...prevState,
        //         enteredAmount:event.target.value,}
        //  })
    }
    const onclickHandler4=(event)=>{
        // setUserInput((prevState)=>{
        //     return{ ...prevState,
        //         enteredDate:event.target.value,}
        //  })
        setDate(event.target.value)
    }

    const submitForm=(event)=>{
        event.preventDefault();
        const expenseData={
            title,locationOfExpenditure,amount,date:new Date(date)
        }
       props.onSaveExpenseData(expenseData);
       setTitle('')
       setLocationOfExpenditure('')
       setAmount('')
       setDate('')
    }



    return(<div>
        <form onSubmit={submitForm}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Expense Item</label>
            <input value={title} onChange={onclickHandler1} type="text"/>
            </div>
            <div className="new-expense__control">
            <label>Expenditure Location</label>
            <input value={locationOfExpenditure} onChange={onclickHandler2} type="text"/>
            </div>
            <div className="new-expense__control">
            <label>Expense Amount</label>
            <input value={amount} onChange={onclickHandler3}  type="text"/>
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input value={date} type="date" min="2023-09-09" max="2024-12-31" onChange={onclickHandler4}/>
            </div>           
            </div>
            <div className="new-expense__actions">
            <button type="submit">Submit</button>
            </div>
        </form>
    </div>)
}

export default ExpenseForm