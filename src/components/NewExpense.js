import React, { useState } from "react";
import "./NewExpense.css";
import Expenseform from "./Expenseform";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const saveDataExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    setisEditing(true);
  };
  const stopEditingHandler = () => {
    setisEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && <Expenseform onSaveExpenseData={saveDataExpenseHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
