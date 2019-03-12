
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import React, { Component } from 'react';
import '../style/Widget.css';



const Completionist = () => <span>Dejà en vente!!</span>;
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
            <h2>  {this.props.album}</h2>
              <h2>  De :{this.props.auteur}</h2>
                <img src={this.props.couv}  alt="My Pic"/>


        </div>

        );
    }
}




export default TimerWidget;
