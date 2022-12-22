import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/Expenses/ExpenseList';

function App() {
  const expenses = [
    {
      time: new Date('2022-11-05'),
      title: 'Petrol',
      amount: 49.54,
    },
    {
      time: new Date('2022-11-03'),
      title: 'Grocery',
      amount: 30.90,},
    {
      time: new Date('2022-11-01'),
      title: 'Headphones',
      amount: 300.63,
    },
    {
      time: new Date('2022-11-20'),
      title: 'Carrot soup',
      amount: 3.73,
    },
    {
      time: new Date('2022-11-22'),
      title: 'Cake',
      amount: 5.90,
    },
    {
      time: new Date('2022-11-29'),
      title: 'Medicine',
      amount: 11.99,
    },
  ];

  return (
    <div className="App">
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
