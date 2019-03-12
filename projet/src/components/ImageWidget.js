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
          <br/>
          <h2> Titre : {this.props.titre}</h2>
          <br/>
          <h2> Auteur : {this.props.auteur}</h2>
          <br/>
          <h2> Meilleur track : {this.props.track}</h2>
          </div>
        </div>

        );
    }
}




export default ImageWidget;
