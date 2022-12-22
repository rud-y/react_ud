import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  const expensesContainer = props.expenses.map((expense,index) => {
      return <ExpenseItem
        key={index}
        time={expense.time}
        title={expense.title}
        amount={expense.amount}
        />
    });

  return (
    <div className='expense-list'>{expensesContainer}</div>
  );

}

export default ExpenseList;