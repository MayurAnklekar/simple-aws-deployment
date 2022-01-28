import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [button, setButton] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const handleClick = () => {
    setButton(true);
  };
  const handleCancel = () => {
    setButton(false);
  };

  if (!button)
    return (
        <div className="new-expense">
      <button type="button" onClick={handleClick}>
        Add Another Expense
      </button>
      </div>
    );

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={handleCancel} />
    </div>
  );
};
export default NewExpense;
