import ExpenseItem from "./ExpenseItem";
import './Expenses.css';


function Expenses(props) {

    return (
        <div className="expenses">
            <ExpenseItem
                title={props.props[0].title}
                amount={props.props[0].amount}
                date={props.props[0].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.props[1].title}
                amount={props.props[1].amount}
                date={props.props[1].date}>
            </ExpenseItem>

            <ExpenseItem title={props.props[2].title}
                amount={props.props[2].amount}
                date={props.props[2].date}>

            </ExpenseItem>
            <ExpenseItem title={props.props[3].title}
                amount={props.props[3].amount}
                date={props.props[3].date}>

            </ExpenseItem>
        </div>

    )


}

export default Expenses;