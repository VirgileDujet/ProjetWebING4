import React, { Component } from 'react';
import '../style/Widget.css';

// Import styling


class ListWidget extends Component {
    render() {

      const da= this.props.dada;
      const data =[{"name":this.props.dada},{"name":"test2"}];
      const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

      return (
    <div className="ListWidget">
        <div className="header">
            <h2>
                {this.props.titre}
            </h2>
          </div>
        <div>

        <progress max="80" value= {this.props.data}> 10% </progress>



        </div>

        </div>
      );
        }

}



export default ListWidget;
