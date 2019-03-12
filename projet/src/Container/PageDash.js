import React, { Component } from 'react';
import Widget from '../components/Widget';
import PieWidget from '../components/PieWidget';
import ProgressWidget from '../components/ProgressWidget';
import ImageWidget from '../components/ImageWidget'
import VoteWidget from '../components/VoteWidget'
import TimerWidget from '../components/TimerWidget'
import Formulaire from '../components/Formulaire'
import '../style/Widget.css';
import '../App.css'
import {Container,Row,Col,Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    name: 'Spoti', Comique: 212, Dramatique: 350,Livide : 50, amt: 40,
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
var day = 6;
var hours =19;
var date = new Date(year,month, day, hours);

class PageDash extends Component {
  constructor(props) {
    super(props);

      this.state = {value: '',places: this.props.places ,fond: this.props.fond ,prepa : this.props.prepa,echau: this.props.echau ,jour: this.props.jour ,mois: this.props.mois, annee: this.props.annee, heure : this.props.heure , lien: this.props.lien};
  }



///FONCTION POUR CREER UNE DATE
  Envoidate(){

    var year=this.props.annee;
    var month =this.props.mois;
    var day = this.props.jour;
    var hours =this.props.heure;
    var date = new Date(year,month, day, hours);

    return date;
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

            <br/>
            <Widget titre="Nombres de like de nos artistes " contenu={this.Envoidata(this.state.places)}>
            </Widget >
            <br/>
            <ImageWidget titre="Album du moment" couv={this.Envoidata(this.state.lien)}>
            </ImageWidget>
          </Col>


            <Col sm='4'>


              <VoteWidget titre="Nos TOP 3 Followers :" datavote= {this.Envoidata(data)}>
              </VoteWidget>
              <br/>
              <TimerWidget titre="Le prochain album finis est dans :" album ="TITRE" auteur="AUTEUR" couv="" date = {this.Envoidate()}>
              </TimerWidget>
            </Col>

            <Col sm='4'>
              <PieWidget titre="Genre des albums vendus" datapie={this.Envoidata(datapie)}>
              </PieWidget>
                <br/>
                <ProgressWidget titre="Fond pour création de l'album : " titre2="Preparation des tracks" titre3="Ecriture des paroles" data={this.Envoidata(this.state.fond)} data2={this.Envoidata(this.state.prepa)} data3={this.Envoidata(this.state.echau)}>
                </ProgressWidget>
              }
            </Col>
          </Row>
        </Container>
      </div>

        );
    }
}





export default PageDash;
