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
 <Legend />
 <Bar dataKey="Comique" fill="#8884d8" />
 <Bar dataKey="Dramatique" fill="#82ca9d" />
  <Bar dataKey="Livide" fill="#82ca9d" />
                  </BarChart>
            </ResponsiveContainer>
            </div>
        </div>

        );
    }
}



export default VoteWidget;
