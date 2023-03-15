export default function ExpenseChart({ items }) {
    const groupDataByMonth = [];
    for (let index = 0; index < 12; index++) {
        groupDataByMonth[index] = [];
    }
    items.forEach((item) => {
        const month = new Date(item.date).getMonth();
        groupDataByMonth[month].push(item)
    })
    const data = Object.keys(groupDataByMonth).map((m) => {
        return groupDataByMonth[m].reduce((prev, cur) => {
            return prev + parseInt(cur.amount);

        }, 0)
    })
    const max = Math.max(...data);
    const chartData = data.map((item) => {
        return (item / max) * 100
    });

    // const totalByMonth = Object.keys(groupByMonth).map(month => {
    //     return groupByMonth[month].reduce((preValue, currentValue) => {
    //         return preValue + parseFloat(currentValue.amount);
    //     }, 0)
    // })
    console.log("groupDataByMonth", { groupDataByMonth, data, chartData })
    console.log(max)
    // console.log("totalByMonth", totalByMonth)
    const monthOfYear = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"];


    return (
        <div className="px-4 py-3">
            <div className="card">
                <div className="card-body d-flex justify-content-between">
                    <div className="chart">
                        {chartData.map((value, index) => (<div>
                            <div className="inner" style={{ height: `${value}%` }}></div>
                            <span>{monthOfYear[index]}</span>
                        </div>)
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
// element.style {
//     display: flex;
//     justify-content: space-around;
//     width: 100%;
//     height: 400px;
// }
// .chart>div {
//     background-color: blanchedalmond;
//     width: 60px;
// }