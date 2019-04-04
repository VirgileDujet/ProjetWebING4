import React, { Component } from 'react';
import '../style/Widget.css';


class ImageWidget extends Component {
    render() {


        return (

        <div className="Widget">

          <div className="header">
              <h2>
                  {this.props.titre}
                  <br/>
              </h2>
            </div>

<br/>
          <div className="content">
          <img src={this.props.couv} height="240" width="240" alt="My Pic"/>
          <br/>

          <h2> Titre : {this.props.titrealbum}</h2>

          <h2> Auteur : {this.props.auteur}</h2>

          <h2> Une track : {this.props.track}</h2>
          </div>
        </div>

        );
    }
}




export default ImageWidget;
