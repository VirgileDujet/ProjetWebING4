import React, { Component } from 'react';
import '../style/Widget.css';


class ImageWidget extends Component {
    render() {


        return (

        <div className="Widget">

          <div className="header">
              <h2>
                  {this.props.titre}
              </h2>
            </div>


          <div className="content">
          <img src={this.props.couv}  alt="My Pic"/>
            </div>
        </div>

        );
    }
}




export default ImageWidget;
