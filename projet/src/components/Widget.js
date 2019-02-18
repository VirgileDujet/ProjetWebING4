import React, { Component } from 'react';
import '../style/Widget.css';

class Widget extends Component {
    render() {
        return (

        <div className="Widget">

          <div className="header">
              <h2>
                  {this.props.titre}
              </h2>
            </div>


          <div className="content">
            {this.props.contenu}
            </div>
        </div>

        );
    }
}

// Provide default settings for when they aren't supplied
Widget.defaultProps = {
    heading: "Unnamed Widget",
    colspan: 1,
    rowspan: 1
}


export default Widget;
