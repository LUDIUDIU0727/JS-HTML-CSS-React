import { useState } from "react";
import ExpenseChart from "./ExpensesChart";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);

    }

    const filteredExpenses = props.props.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseChart expenses={filteredExpenses} />

                <ExpensesList items={filteredExpenses} />

            </Card>
        </div>

    );


};

export default Expenses;