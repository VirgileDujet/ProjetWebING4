
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import React, { Component } from 'react';
import '../style/Widget.css';



const Completionist = () => <span>Trop tard pour aujourd'hui !</span>;
class TimerWidget extends Component {

  Envoidata(donné){



    donné.setHours("19");
    return donné;
  }


    render() {

        return (

        <div className="TimerWidget">

          <div className="header">
              <h2>
                  {this.props.titre}
              </h2>
            </div>


          <div className="Timercontent">
              <Countdown date={this.props.date }>
               <Completionist />
              </Countdown>
            </div>
        </div>

        );
    }
}




export default TimerWidget;
