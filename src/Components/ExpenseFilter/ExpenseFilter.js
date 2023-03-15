export default function ExpenseFilter({ value, onChange }) {


    return (
        <div style={{ gap: "20px", padding: "20px" }} className="d-flex justify-content-between" >
            <div>Filter by year</div>
            <select style={{ width: 300 }} className="form-select" value={value.year} onChange={(event) => onChange && onChange({ year: event.target.value })} >
                <option value="2021">2021</option>
                <option value="2022" >2022</option>
                <option value="2023">2023</option>
            </select>
        </div >
    )
}