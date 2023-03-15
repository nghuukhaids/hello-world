export default function ExpenseList({ items }) {


    return (
        <div>{
            items && items.length > 0 ? (
                <>{
                    items.map((item) => (
                        <div className="card" style={{ margin: "25px" }}>
                            <div className="card-body d-flex justify-content-between" >
                                <div className="d-flex align-items-start flex-column">
                                    <div>{item.date}</div>
                                    <div>{item.name}</div>
                                </div>
                                <div>
                                    <div>{item.amount}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }</>
            ) : (
                <div className="card" style={{ margin: "25px" }}>
                    <div className="card-body d-flex justify-content-between" >
                        Nothing to show
                    </div>
                </div>
            )
        }</div>
    )
}