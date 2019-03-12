
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import '../style/Widget.css';




class DurationWidgett extends Component {

  Envoidata(donné){



    donné.setHours("19");
    return donné;
  }


    render() {

        return (

        <div className="DurationWidget">

          <div className="header">
              <h2>
                  {this.props.titre}
              </h2>
            </div>


          <div className="Durationrcontent">

            </div>



        </div>

        );
    }
}




export default DurationWidgett;
