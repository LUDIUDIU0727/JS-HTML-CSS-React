import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);

    }

    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem
                    title={props.props[0].title}
                    amount={props.props[0].amount}
                    date={props.props[0].date} />

                <ExpenseItem
                    title={props.props[1].title}
                    amount={props.props[1].amount}
                    date={props.props[1].date} />


                <ExpenseItem title={props.props[2].title}
                    amount={props.props[2].amount}
                    date={props.props[2].date} />


                <ExpenseItem title={props.props[3].title}
                    amount={props.props[3].amount}
                    date={props.props[3].date} />


            </Card>
        </div>

    );


}

export default Expenses;