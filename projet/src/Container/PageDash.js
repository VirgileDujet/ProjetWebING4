import React, { Component } from 'react';
import Widget from '../components/Widget';
import PieWidget from '../components/PieWidget';
import ProgressWidget from '../components/ProgressWidget';
import ImageWidget from '../components/ImageWidget'
import VoteWidget from '../components/VoteWidget'
import TimerWidget from '../components/TimerWidget'
import DurationWidget from '../components/DurationWidget'
import '../style/Widget.css';
import '../App.css'
import {Container,Row,Col,Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

//VALEUR BARRE DE CHARGEMENT
const val = (77);
const val2 = (77);
const val3 = (77);

///VALEUR DES PLACES
const placerestantes = 5;
///LIEN D AFFICHE
const affiche = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIXMhM7wIHrNd1YXmvjzsoadndwcrLBtYsCv-klJjKY5SfRan"

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

      this.state = {value: '',
      nombre: 5 ,

      max1 :100,
        max2 :100,
          max3 :100,

          maxa1 :"vide",
          maxa2 : "vide2",
          maxa3 : "vide3",

          dur : 0,

          date : 0,
          datetitre :"vide",
          dateauteur : "vide",
          coverurl: "vide",

          rap: 0,
          rock :0,
          pop :0,
          electro :0,
          kpop : 0,
          autre :0,

          best:0,


      titralbum: "titrealbum",
      auteur: "auteur" ,
      fond: this.props.fond ,
      prepa : this.props.prepa,
      echau: this.props.echau ,jour: this.props.jour ,
      mois: this.props.mois,
      annee: this.props.annee,
      heure : this.props.heure ,
      lien: ""};
  }

componentWillMount(){


axios.get('http://localhost:3030/artistes')
  .then(({ data }) => {

    for(var i = 0; i <= data.length; i++)
    {
          if(i==0)
          {
            var fl = parseInt(data[i].followers,10);
          }
          if(i!=0)
          {
            fl=fl+parseInt(data[i].followers,10);
           this.setState({ nombre: fl});
          }
    }

  })
  .catch(err => {
    console.error(err);
  })
  /////
  axios.get('http://localhost:3030/artistes')
    .then(({ data }) => {


      for(var u = 0; u <= data.length; u++)
      {
            if(u==0)
            {
              var tmp = [];
              var t = parseInt(data[u].followers,10);
              tmp.push(t);

            }
            if(u!=0)
            {

                var t = parseInt(data[u].followers,10);
                tmp.push(t)
                tmp.sort((a, b) => a - b);


                this.setState({ max1: tmp[data.length-1]});
                this.setState({ max2: tmp[data.length-2]});
                this.setState({ max3: tmp[data.length-3]});






            }
      }

    })
    .catch(err => {
      console.error(err);
    })
    /////
    axios.get('http://localhost:3030/artistes')
      .then(({ data }) => {

        for(var z=0 ; z <= data.length; z++)
        {

          if(data[z].followers==this.state.max1)
          {
                  this.setState({ maxa1: data[z].nom });
          }
          if(data[z].followers==this.state.max2)
          {
                  this.setState({ maxa2: data[z].nom });
          }
          if(data[z].followers==this.state.max3)
          {
                  this.setState({ maxa3: data[z].nom });
          }
        }

      })
      .catch(err => {
        console.error(err);
      })
      /////
  axios.get('http://localhost:3030/albums')
    .then(({ data }) => {
      var l= data.length;

      var x = Math.floor((Math.random() *l) );
      const { cover } = data[x];
      const {titre  } =data[x];
        const {auteur  } =data[x];
        const {tracks } =data[x];

        console.log(tracks[0]);

      this.setState({ lien: cover });
        this.setState({ titrealbum: titre });
          this.setState({ auteur: auteur });
              this.setState({ best: tracks[0] });
    })
    .catch(err => {
      console.error(err);
    })
    /////
axios.get('http://localhost:3030/albums')
      .then(({ data }) => {

        for(var z=0 ; z <= data.length; z++)
        {
          if(z==0)
          {
            var rap =0;
            var pop =0;
            var rock =0;
            var electro=0;
            var kpop =0;
            var autre=0;
          }

          if(data[z].genre=="Rap")
          {
                  rap=rap+1;
          }
          if(data[z].genre=="Rock")
          {
                  rock=rock+1;
          }
          if(data[z].genre=="Pop")
          {
                  pop=pop+1;
          }
          if(data[z].genre=="Electro")
          {
                  electro=electro+1;
          }
          if(data[z].genre=="K-pop")
          {
                  kpop=kpop+1;
          }
          if(data[z].genre=="Autre")
          {
                  autre=autre+1;
          }

          this.setState({ rap: rap });
          this.setState({ rock: rock });
          this.setState({ pop: pop });
          this.setState({ electro: electro });
          this.setState({ kpop: kpop });
          this.setState({ autre: autre });
        }
      })
      .catch(err => {
        console.error(err);
      })
      ///////////
      axios.get('http://localhost:3030/tracks')
        .then(({ data }) => {

          for(var z=0 ; z <= data.length; z++)
          {

            if(z==0)
            {
                    var tot = data[z].duree;

            }
            if(z!=0)
            {
                    tot = tot+data[z].duree;
            }
            if(z==data.length-1)
            {
              var temps=new Date();
              temps.setTime(tot*1000);
              var m = temps.getMinutes();
            }


              this.setState({ dur: m });
          }

        })
        .catch(err => {
          console.error(err);
        })
        /////
        ///////////
        axios.get('http://localhost:3030/albums')
          .then(({ data }) => {

            for(var z=0 ; z <= data.length; z++)
            {

              if(z==0)
              {

                     var date = data[z].sortie;
                     var auteur = data[z].auteur;
                     var titre = data[z].titre;
                     var cover = data[z].cover;
                     var ajd= new Date();

                     var year=ajd.getFullYear();
                     var month =ajd.getMonth();
                     var day = ajd.getDate();

                     var ajd2 = new Date(year,month, day,2,0,0,0);



              }
              if(z!=0)
              {


                  if(data[z].sortie <date && data[z].dispo=="non")
                  {

                      date = data[z].sortie;
                      auteur = data[z].auteur;
                      titre = data[z].titre;
                      cover = data[z].cover;

                  }


              }


                this.setState({ date: date });
                this.setState({ datetitre: titre });
                this.setState({ dateauteur: auteur });
                this.setState({ coverurl: cover});
            }

          })
          .catch(err => {
            console.error(err);
          })
          /////
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

  Envoivote(){
    const data = [
      {
        name: 'Spoti', premier: this.state.max1, deuxieme: this.state.max2 ,troisieme: this.state.max3, amt: 40,
      },
    ]
    return data;
  }

  Envoipie(){
    const datapie = [
      { name: 'Rap', value: this.state.rap }, { name: 'Electro', value: this.state.electro },
      { name: 'Rock', value: this.state.rock },
      { name: 'Pop', value: this.state.pop }, { name: 'Autres', value: this.state.autre},
    ];
    return datapie;
  }

    render() {

        return (
    <div className="App">

    <ul>
  <li><a className="active" href="http://localhost:3000/">Dashboard</a></li>
  <li><a href="http://localhost:3000/adminput">Put</a></li>
  <li><a href="http://localhost:3000/adminpost">Post</a></li>
  <li><a href="http://localhost:3000/admindelete">Delete</a></li>
</ul>

      <Container>
          <Row>
          <Col sm='4'>

            <br/>
            <Widget titre="Nombres de followers de nos artistes " contenu={this.Envoidata(this.state.nombre)}>
            </Widget >
            <br/>
            <ImageWidget titre="Album du moment" auteur={this.state.auteur} titrealbum={this.state.titrealbum}  track={this.state.best} couv={this.Envoidata(this.state.lien)}>
            </ImageWidget>
          </Col>


            <Col sm='4'>


              <VoteWidget titre="Nos TOP 3 Followers :" datavote= {this.Envoivote()} max1={this.state.maxa1} max2={this.state.maxa2} max3={this.state.maxa3}>
              </VoteWidget>
              <br/>
              <DurationWidget titre="Duree total d'ecoute disponible" moyenne={this.state.dur}>
              </DurationWidget>

            </Col>

            <Col sm='4'>
              <PieWidget titre="Nombre d'album par genre" datapie={this.Envoipie()}>
              </PieWidget>
                <br/>
                <TimerWidget titre="Le prochain album finis est dans :" album ={this.state.datetitre} auteur={this.state.dateauteur} couv={this.state.coverurl} date = {this.state.date}>
                </TimerWidget>

              }
            </Col>
          </Row>
        </Container>
      </div>

        );
    }
}





export default PageDash;
