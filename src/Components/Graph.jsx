import React from 'react'
// import Chart from './Chart'
// import HighCharts from 'highcharts';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

export default function Graph(props) {
    // console.log(props)
    return (
        <div className='container'>
            <h1>Records</h1>
            <table className='table'>
                <tr>
                    <th scope='col'>Physics</th>
                    <th scope='col'>Chemistry</th>
                    <th scope='col'>Maths</th>
                </tr>
                <tr>
                    <td>{props.result.a}</td>
                    <td>{props.result.b}</td>
                    <td>{props.result.c}</td>
                </tr>
            </table>
            <p>
                <b>Total marks :{props.result.d} / 300</b>
                <br />
                <b>Percentage: {props.result.e}  % </b>

            </p>
            {/* <Chart/> */}
        </div>
    )
}
