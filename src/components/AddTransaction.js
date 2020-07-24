import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const addExpenseClick = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: -amount
        }

        addTransaction(newTransaction)
    }


    const addIncomeClick = e => {
        e.preventDefault();

        if ( amount === 0  || text === '') {

            console.log('pass')
            
        } else {

            const newTransaction = {
                id: Math.floor(Math.random() * 1000000),
                text,
                amount: +amount
            }

            addTransaction(newTransaction)
        }

    }

    return (
        <>
            <form >
                <div className="form-control">
                    <Alert severity="error" className="err-trans-desc">You must add description</Alert>
                    <TextField id="outlined-basic"  fullWidth={true} label="Add new transaction description" variant="outlined" value={text} onChange={(e) => { setText(e.target.value) }} />
                </div>
                <div className="form-control">
                    <Alert severity="error" className="err-trans-amout">You must add amount</Alert>
                    <TextField id="outlined-basic" fullWidth={true} label="Add new transaction amount" variant="outlined" value={amount} onChange={(e) => { setAmount(Math.abs(e.target.value)) }} />
                </div>
                <div className="text-center margin-10">
                    <button className="income-btn submit-btn" onClick={addIncomeClick}>Add income</button>
                    <button className="expense-btn submit-btn" onClick={addExpenseClick}>Add expense</button>
                </div>
            </form>

        </>
    )
}
