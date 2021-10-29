import './NewExpense.css'
import Expenseform from './Expenseform';

const NewExpense = (props) => {
    const saveDataExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData)
    }
    return <div className="new-expense">
        <Expenseform 
        onSaveExpenseData={saveDataExpenseHandler}/>
    </div>
}

export default NewExpense;