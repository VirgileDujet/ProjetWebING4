import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,ResponsiveContainer
} from 'recharts';
import logo from '../style/img.jpg';


export default class Example extends PureComponent {


  render() {
    return (
      <div className="PieWidget">
      <div className="header">
          <h2>
              {this.props.titre}
          </h2>


        </div>
        <div className="PieContent">
      <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={this.props.datapie} cx={150} cy={100} outerRadius={80} fill="#8884d7" label />
    
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
      </div>
    </div>
    );
  }
}
