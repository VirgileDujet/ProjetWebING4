import React, { Component } from 'react';
import Widget from './components/Widget';
import PieWidget from './components/PieWidget';
import ProgressWidget from './components/ProgressWidget';
import ImageWidget from './components/ImageWidget'
import VoteWidget from './components/VoteWidget'
import TimerWidget from './components/TimerWidget'
import Formulaire from './components/Formulaire'
import './style/Widget.css';
import './App.css'
import {Container,Row,Col,Button} from 'reactstrap';
//VALEUR BARRE DE CHARGEMENT
const val = (77);
const val2 = (77);
const val3 = (77);

///VALEUR DES PLACES
const placerestantes = 5;
///LIEN D AFFICHE
const affiche = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIXMhM7wIHrNd1YXmvjzsoadndwcrLBtYsCv-klJjKY5SfRan"
///DATA DU BAR CHART
const data = [
  {
    name: 'Théatre du centre', Comique: 212, Dramatique: 350, amt: 40,
  },
]
///DATA PIE
const datapie = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];
///VALEUR DE LA DATE
var year=2019;
var month =2;
var day = 5;
var hours =19;
var date = new Date(year,month, day, hours);

class App extends Component {
  constructor(props) {
    super(props);
    this.Nb = this.Nb.bind(this);

    this.state = {places : '0'};
  }

  Nb(nbplaces) {
    this.setState({places:  nbplaces});
  }



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

          <Formulaire onNBplace={this.Nb}>
          </Formulaire>
            <br/>
            <Widget titre="Places restantes pour ce soir " contenu={this.Envoidata(this.state.places)}>
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
              <PieWidget titre="Types de places vendues" datapie={this.Envoidata(datapie)}>
              </PieWidget>
                <br/>
                <ProgressWidget titre="Fond pour le théatre" titre2="Preparation de la piece" titre3="Echauffement des acteurs"data={this.Envoidata(val)} data2={this.test(val2)} data3={this.test(val3)}>
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
