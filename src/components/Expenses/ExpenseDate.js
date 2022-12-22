const ExpenseDate = (props) => {
  const time = props.time.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div className='expense-item__time'>{time}</div>
    );
  };
export default ExpenseDate;