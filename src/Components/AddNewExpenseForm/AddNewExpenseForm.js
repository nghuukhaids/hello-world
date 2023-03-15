import "./AppNewExpenseForm.css"
import { useState } from 'react'
export default function AddNewExpenseForm(props) {
    const [isShowForm, setIsShowForm] = useState(false);
    const initFormValue = {
        name: "",
        amount: "",
        date: ""
    }
    const [handleChangeValue, setHandleChangeValue] = useState({
        name: "",
        amount: "",
        date: ""
    }
    )
    const handleChange = (event) => {
        const { name, value } = event.target
        setHandleChangeValue({ ...handleChangeValue, [name]: value })
        console.log(event)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.onAddNew && typeof props.onAddNew === "function") {
            props.onAddNew(handleChangeValue)
            setHandleChangeValue(initFormValue)
        }
    }

    return (
        <div>
            {isShowForm ? (
                <form id="formSubmit" onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center justify-content-between" style={{ width: 800 }}>
                        <label for="exampleInputName" className="form-label">Name</label>
                        <input style={{ width: 600 }} type="text" className="form-control" id="exampleInputName" onChange={handleChange} name="name" value={handleChangeValue.name} />
                    </div>
                    <div className="d-flex align-items-center justify-content-between " style={{ width: 800 }} >
                        <label for="exampleInputAmount" className="form-label">Amount</label>
                        <input style={{ width: 600 }} type="number" className="form-control" id="exampleInputAmount" onChange={handleChange} name="amount" value={handleChangeValue.amount} />
                    </div>
                    <div className="d-flex align-items-center justify-content-between" style={{ width: 800 }}>
                        <label for="exampleInputDate" className="form-label">Date</label>
                        <input style={{ width: 600 }} type="date" className="form-control" id="exampleInputDate" onChange={handleChange} name="date" value={handleChangeValue.date} />
                    </div>
                    <div id="groupBtn" className="d-flex justify-content-end" style={{ width: "100%" }}>
                        <button type="submit" className="btn btn-primary text-uppercase">Add</button>
                        <button type="button" onClick={() => { setIsShowForm(false) }} className="btn btn-primary text-uppercase">Cancel</button>
                    </div>

                </form>
            )
                : (
                    <div>
                        <button id="addNewExpense"  type="button" onClick={() => { setIsShowForm(true) }} className="btn btn-primary text-uppercase">Add New Expense</button>
                    </div>
                )
            }
        </div >)
}