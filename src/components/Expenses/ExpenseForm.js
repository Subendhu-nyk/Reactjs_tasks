import React,{useState} from "react";

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
            <label>Expense Item</label>
            <input onChange={onclickHandler1} type="text"/>
            <label>Expenditure Location</label>
            <input onChange={onclickHandler2} type="text"/>
            <label>Expense Amount</label>
            <input onChange={onclickHandler3}  type="text"/>
            <button >Submit</button>
        </form>
    </div>)
}

export default ExpenseForm