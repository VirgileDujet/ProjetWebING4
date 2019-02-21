import React, { Component } from 'react';
import Widget from './components/Widget';
import PieWidget from './components/PieWidget';
import ProgressWidget from './components/ProgressWidget';
import ImageWidget from './components/ImageWidget'
import VoteWidget from './components/VoteWidget'
import TimerWidget from './components/TimerWidget'
import './style/Widget.css';
import './App.css'
import {Container,Row,Col,Button} from 'reactstrap';
const val = (77);


const placerestantes = 5;

const affiche = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIXMhM7wIHrNd1YXmvjzsoadndwcrLBtYsCv-klJjKY5SfRan"

const data = [
  {
    name: 'Page A', Comique: 212, Dramatique: 350, amt: 40,
  },
]

var year=2019;
var month =1;
var day = 21;
var hours =19;
var date = new Date(year,month, day, hours);

class App extends Component {
  test(val){
    const ok = val+1;
    return ok.toString();
  }

  Envoidata(donné){

    return donné;
  }

    render() {

        return (
    <div className="App">
      <Container>
          <Row>
          <Col sm='4'>

            <br/>
            <Widget titre="Places restantes pour ce soir " contenu={this.Envoidata(5)}>
            </Widget >
            <br/>
            <ImageWidget titre="Notre pièce de ce soir" couv={this.Envoidata(affiche)}>
            </ImageWidget>
          </Col>


            <Col sm='4'>


              <VoteWidget titre="Vote de la prochaine pièce" datavote= {this.Envoidata(data)}>
              </VoteWidget>
              <br/>
              <TimerWidget titre="La prochaine pièce est dans :" date = {this.Envoidata(date)}>
              </TimerWidget>
            </Col>

            <Col sm='4'>
              <PieWidget titre="Types de places vendues" contenu={this.Envoidata(5)}>
              </PieWidget>
                <br/>
                <ProgressWidget titre="Fond pour le théatre" titre2="Preparation de la piece" titre3="Echauffement des acteurs"data={this.Envoidata(val)} data2={this.test(val)} data3={this.test(val)}>
                </ProgressWidget>
              }
            </Col>
          </Row>
        </Container>
      </div>

        );
    }
}





export default App;
