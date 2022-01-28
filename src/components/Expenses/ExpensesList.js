import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0)
    return <h3 className="expenses-list__fallback">No Items Found</h3>;

  return (
    <div className="expenses-list">
      {props.items.map((items) => (
        <ExpenseItem
          key={items.id}
          title={items.title}
          amount={items.amount}
          date={items.date}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
