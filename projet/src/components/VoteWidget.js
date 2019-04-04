import React, { PureComponent } from 'react';
import '../style/Widget.css';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';




class VoteWidget extends PureComponent {
    render() {


        return (

        <div className="VoteWidget">

          <div className="header">
              <h2>
                  {this.props.titre}
              </h2>
            </div>


          <div className="Votecontent">
              <ResponsiveContainer width="100%" height="100%">
                  <BarChart width={500} height={200} data={this.props.datavote}>

                  <CartesianGrid strokeDasharray="3 3" />
 <XAxis dataKey="name" />
 <YAxis />
 <Tooltip />
 <Legend
 payload={
  [
    { id: 'up', value: this.props.max1, type: 'diamond', color: '#8884d8'},
    { id: 'uv', value: this.props.max2, type: 'diamond', color: '#0066ff'},
    { id: 'ug', value: this.props.max3, type: 'diamond', color: '#82ca9d'}
  ]
 }
/>/>
 <Bar dataKey="premier" fill="#8884d8" />
 <Bar dataKey="deuxieme" fill="#0066ff" />
 <Bar dataKey="troisieme" fill="#82ca9d" />
                  </BarChart>
            </ResponsiveContainer>
            </div>
        </div>

        );
    }
}



export default VoteWidget;
