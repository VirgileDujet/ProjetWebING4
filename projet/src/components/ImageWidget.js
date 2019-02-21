import React, { Component } from 'react';
import '../style/Widget.css';


class ImageWidget extends Component {
    render() {

var i = this.props.couverture;

        return (

        <div className="Widget">

          <div className="header">
              <h2>
                  {this.props.titre}
              </h2>
            </div>


          <div className="content">
            <img src={require(i)} />
            </div>
        </div>

        );
    }
}




export default ImageWidget;
