import React, { Component } from 'react';
import '../style/Widget.css';
import {ProgressBar} from 'react-bootstrap';

// Import styling


class ProgressWidget extends Component {
    render() {

      const da= this.props.dada;
      const data =[{"name":this.props.dada},{"name":"test2"}];
      const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

      return (
    <div className="ProgressWidget">
        <div className="header">
            <h2>
                {this.props.titre}
            </h2>
          </div>
        <div>

        <ProgressBar animated label={`${this.props.data}%`} now={this.props.data}/>

        </div>

        <div className="header">
            <h2>
                {this.props.titre2}
            </h2>
          </div>
        <div>

        <ProgressBar animated label={`${this.props.data2}%`} now={this.props.data2}/>

        </div>



        <div className="header">
            <h2>
                {this.props.titre3}
            </h2>
          </div>
        <div>

        <ProgressBar animated label={`${this.props.data3}%`} now={this.props.data3}/>

        </div>

        </div>


      );
        }

}



export default ProgressWidget;
