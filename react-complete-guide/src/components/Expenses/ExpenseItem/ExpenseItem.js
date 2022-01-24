import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../../UI/Card/Card";

const ExpenseItem = props => {
    // a react hook that helps update the ui after variable changes
    // receives the default value
    const {date, amount} = props;
    const [title, setTitle] = useState(props.title);

    const changeName = () => {
        // probably not the best way to do it
        setTitle('Title Updated');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={changeName}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;
