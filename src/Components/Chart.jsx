import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function Chart(props) {
    console.log(props.result);

    const options = {
        title: {
            text: 'My Marks'
        },
        series: [{
            data: [props.result.a, props.result.b, props.result.c]

        }]
    }

    const out = () => <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>
    return (
        out()
    )
}
