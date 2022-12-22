import './ExpenseItem.css';
import ExpenseDate  from './ExpenseDate';
import Card from '../Card';

function ExpenseItem(props) {
  const title = props.title;
  const amount = props.amount.toFixed(1);

  return (
    <Card className='expense-item'>
      <ExpenseDate time={props.time}/>
      <div className='expense-item__title'>{title}</div>
      <div className='expense-item__amount'>{amount}</div>
    </Card>
  );
}

export default ExpenseItem;