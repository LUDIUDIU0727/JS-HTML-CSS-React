import ChartBar from './ChartBar'
import './Chart.css'


const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value);

    const totalMaxium = Math.max(...dataPointValues);




    return <div className="chart">
        {props.dataPoints.map((datapoint) => (
            <ChartBar
                key={datapoint.lable}
                value={datapoint.value}
                maxValue={totalMaxium}
                lable={datapoint.lable}
            />
        ))}

    </div>

};





export default Chart;