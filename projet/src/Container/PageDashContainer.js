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
import PageDash from './PageDash';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from "../routes";
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
var day = 6;
var hours =19;
var date = new Date(year,month, day, hours);

class PageDashContainer extends Component {
  constructor(props) {
    super(props);
    this.Nb = this.Nb.bind(this);

      this.Nfond = this.Nfond.bind(this);
      this.Nprepa = this.Nprepa.bind(this);
      this.Nechau = this.Nechau.bind(this);

      this.Nannee = this.Nannee.bind(this);
      this.Nmois = this.Nmois.bind(this);
      this.Njour = this.Njour.bind(this);
      this.Nheure = this.Nheure.bind(this);

      this.Nlien = this.Nlien.bind(this);



        this.state = {value: '',places: '4',fond: (1),prepa :(1),echau: (1),jour: (6),mois: (2), annee: (2019), heure : (20), lien: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIXMhM7wIHrNd1YXmvjzsoadndwcrLBtYsCv-klJjKY5SfRan"};
  }

  Nb(nbplaces) {
    this.setState({places:  nbplaces});
  }

  Nfond(nbplaces) {
    this.setState({fond:  nbplaces});
  }

  Nprepa(nbplaces) {
    this.setState({prepa:  nbplaces});
  }

  Nechau(nbplaces) {
    this.setState({echau:  nbplaces});
  }

  Nannee(nbplaces) {
    this.setState({annee:  nbplaces});

  }

  Nmois(nbplaces) {
    this.setState({mois:  nbplaces});
  }

  Njour(nbplaces) {
    this.setState({jour:  nbplaces});
  }

  Nheure(nbplaces) {
    this.setState({heure:  nbplaces});
  }

  Nlien(nbplaces) {
    this.setState({lien:  nbplaces});
  }

///FONCTION POUR CREER UNE DATE
  Envoidate(){

    var year=this.state.annee;
    var month =this.state.mois;
    var day = this.state.jour;
    var hours =this.state.heure;
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
      <PageDash places={this.state.places} fond={this.state.fond} prepa={this.state.prepa} echau={this.state.echau} jour={this.state.jour} mois={this.state.mois} annee={this.state.annee} heure={this.state.heure} lien={this.state.lien}/>
      <Formulaire onNBplace={this.Nb} onNfond={this.Nfond} onNechau={this.Nechau} onNprepa={this.Nprepa} onNheure={this.Nheure} onNjour={this.Njour} onNmois={this.Nmois} onNannee={this.Nannee} onNlien={this.Nlien}>
      </Formulaire>
      </div>

        );
    }
}





export default PageDashContainer;
