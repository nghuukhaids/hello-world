import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import AddNewExpenseForm from './Components/AddNewExpenseForm/AddNewExpenseForm';
import ExpenseList from './Components/ExpenseList/ExpenseList';
import ExpenseFilter from './Components/ExpenseFilter/ExpenseFilter';
import ExpenseChart from './Components/ExpenseChart/ExpenseChart';
function genID() {
  return Date.now();
}
function App() {
  const initData = [];
  const [items, setItems] = useState(initData);
  const [displayItems, setDisplayItems] = useState(initData);
  const [filterValue, setFilterValue] = useState({ year: "2023" });
  const handleAddNew = (newItem) => {
    setItems([{ id: genID(), ...newItem }, ...items]);
  }
  const handleFilterChange = (value) => {
    setFilterValue(value);

  }
  useEffect(() => {
    const filteredItems = items.filter(item => {
      return new Date(item.date).getFullYear() === +filterValue.year;
    });
    setDisplayItems(filteredItems)
    console.log(displayItems)
  }, [items, filterValue])
  return (
    <div className="App">
      <div style={{ height: 1500 }}>
        <AddNewExpenseForm onAddNew={handleAddNew} />
        <ExpenseFilter value={filterValue} onChange={handleFilterChange} />
        <ExpenseChart items={displayItems} />
        <ExpenseList items={displayItems} /></div>
    </div>
  );
}

export default App;
