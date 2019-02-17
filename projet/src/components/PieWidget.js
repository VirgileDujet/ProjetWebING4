import React, { Component } from 'react';
import PieChart from "react-svg-piechart"


class PieWidget extends Component {
    render() {
        return (

        <div className="PieWidget">

        <PieChart

          data={[
            { key: 'A', value: 100, color: '#aaac84' },
            { key: 'B', value: 200, color: '#dce7c5' },
            { key: 'C', value: 50, color: '#e3a51a' }
          ]}
        />

        </div>

        );
    }
}




export default PieWidget;
