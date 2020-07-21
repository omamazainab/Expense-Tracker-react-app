import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const addExpenseClick = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*1000000),
            text,
            amount : -amount
        }

        addTransaction(newTransaction)
    }

    
    const addIncomeClick = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*1000000),
            text,
            amount : +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount </label>
                    <input type="number" min="0" value={amount} onChange={(e) => {setAmount(Math.abs(e.target.value))}} placeholder="Enter amount..." />
                </div>
                <div className="text-center margin-10">
                    <button className="income-btn submit-btn" onClick={addIncomeClick}>Add income</button>
                    <button className="expense-btn submit-btn" onClick={addExpenseClick}>Add expense</button>
                </div>
            </form>
            
        </>
    )
}
