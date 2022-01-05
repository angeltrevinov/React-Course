import React from "react";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from '../../UI/Card/Card';
import './Expenses.css';

const Expenses = props => {
    return (
        <Card className="expenses">
            <ExpenseItem
                id={props.items[0].id}
                date={props.items[0].date}
                title={props.items[0].title}
                amount={props.items[0].amount}
            />
            <ExpenseItem
                id={props.items[1].id}
                date={props.items[1].date}
                title={props.items[1].title}
                amount={props.items[1].amount}
            />
            <ExpenseItem
                id={props.items[2].id}
                date={props.items[2].date}
                title={props.items[2].title}
                amount={props.items[2].amount}
            />
            <ExpenseItem
                id={props.items[3].id}
                date={props.items[3].date}
                title={props.items[3].title}
                amount={props.items[3].amount}
            />
        </Card>
    );
}

export default Expenses;