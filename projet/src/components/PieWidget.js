import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,ResponsiveContainer
} from 'recharts';
import logo from '../style/img.jpg';

const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

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
        <Pie dataKey="value" isAnimationActive={false} data={data01} cx={150} cy={100} outerRadius={80} fill="#8884d8" label />
        <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={20} outerRadius={40} fill="#82ca9d" />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
      </div>
    </div>
    );
  }
}
