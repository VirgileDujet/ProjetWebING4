import React, { Component } from 'react';
import '../style/Widget.css';
import axios from 'axios';


class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "VIDE",
      birth: "",
      followers : "0",
      tab : "",
      value: '',
    places: '0',
    dispo: '',
    duree:"0",
    ecoute :"0",
    feat: "",
    likes :"",

    titre :"",
    sortie :"",
    genre :"",
    lien :"",
    auteur: "",
    dispo :"",
    tabtrack: "",


    fond: (1),prepa :(1),echau: (1),jour: (6),mois: (2), annee: (2019), heure : (20), lien: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIXMhM7wIHrNd1YXmvjzsoadndwcrLBtYsCv-klJjKY5SfRan"};


    this.ArtistSubmit = this.ArtistSubmit.bind(this);
    this.AlbumSubmit = this.AlbumSubmit.bind(this);
    this.TracksSubmit = this.TracksSubmit.bind(this);

        this.nomChange = this.nomChange.bind(this);
        this.birthChange = this.birthChange.bind(this);
        this.followersChange = this.followersChange.bind(this);
        this.tabChange = this.tabChange.bind(this);

        this.titreaChange =this.titreaChange.bind(this);
          this.sortieChange =this.sortieChange.bind(this);
            this.genreChange =this.genreChange.bind(this);
              this.lienChange =this.lienChange.bind(this);
                this.auteurChange =this.auteurChange.bind(this);
                  this.dispoChange =this.dispoChange.bind(this);
                    this.tabtrackChange =this.tabtrackChange.bind(this);

                        this.titretChange =this.titretChange.bind(this);
                            this.dureeChange =this.dureeChange.bind(this);
                                this.likesChange =this.likesChange.bind(this);
                                    this.ecouteChange =this.ecouteChange.bind(this);
                                        this.featChange =this.featChange.bind(this);




  }
  titretChange(event) {
    this.setState({titre: event.target.value});
  }
  dureeChange(event) {
    this.setState({duree: event.target.value});
  }
  likesChange(event) {
    this.setState({likes: event.target.value});
  }
  ecouteChange(event) {
    this.setState({ecoute: event.target.value});
  }
  featChange(event) {
    this.setState({feat: event.target.value});
  }

  TracksSubmit(event) {
    axios.put('http://localhost:3030/tracks', {
      titre: this.state.titre,
      ecoute: this.state.ecoute,
      duree: this.state.duree,
      like: this.state.likes,
      feat : this.state.feat,

    })


      event.preventDefault();
    }

  titreaChange(event) {
    this.setState({titre: event.target.value});
  }
  sortieChange(event) {
    this.setState({sortie: event.target.value});
  }
  genreChange(event) {
    this.setState({genre: event.target.value});
  }
  lienChange(event) {
    this.setState({lien: event.target.value});
  }
  auteurChange(event) {
    this.setState({auteur: event.target.value});
  }
  dispoChange(event) {
    this.setState({dispo: event.target.value});
  }
  tabtrackChange(event) {
    this.setState({tabtrack: event.target.value});
  }



  AlbumSubmit(event) {

    axios.put('http://localhost:3030/albums', {
      titre: this.state.titre,
      genre: this.state.genre,
      sortie: this.state.sortie,
      tracks: this.state.tabtrack,
      cover : this.state.lien,
      dispo : this.state.dispo,
      auteur: this.state.auteur,
    })
      event.preventDefault();
    }

  nomChange(event) {
    this.setState({nom: event.target.value});
  }

  birthChange(event) {
    this.setState({birth: event.target.value});
  }

  followersChange(event) {
    this.setState({followers: event.target.value});
  }

  tabChange(event) {
    this.setState({tab: event.target.value});
  }

ArtistSubmit(event) {

  axios.put('http://localhost:3030/artistes', {
    nom: this.state.nom,
    followers: this.state.followers,
    birth: this.state.birth,
    albums: this.state.tab,
  })

    event.preventDefault();
  }




  render() {
    return (

      <div className="Formulaire">
      <ul>
    <li><a class="active" href="http://localhost:3000/">Dashboard</a></li>
    <li><a href="http://localhost:3000/adminput">Put</a></li>
    <li><a href="http://localhost:3000/adminpost">Post</a></li>
    <li><a href="http://localhost:3000/admindelete">Delete</a></li>
  </ul>
      <h2>Artiste</h2>
      <form onSubmit={this.ArtistSubmit}>
        <label>
          Nom de l'artiste :
            <br/>
          <input type="text" value={this.props.places}  onChange={this.nomChange}  />
        </label>
        <br/>
        <label>
          Date de naissance :
            <br/>
          <input type="date" value={this.props.fond} onChange={this.birthChange} />
        </label>
          <br/>
        <label>
          Nombre de followers :
            <br/>
          <input type="text" value={this.props.prepa} onChange={this.followersChange}  />
        </label>
          <br/>
        <label>
          Ref de l'Album :
            <br/>
          <input type="text" value={this.props.echau}  onChange={this.tabChange}/>
        </label>
        <input type="submit" value="Submit" />
        </form>
          <br/>
          <br/>

                    <form onSubmit={this.AlbumSubmit}>
                    <h2>Album</h2>
                    <label>
                     Titre :
                       <br/>
                    <input type="text" value={this.props.annee} onChange={this.titreaChange}  />
                    </label>
                    <br/>
                    <label>
                      Date de sortie:
                        <br/>
                      <input type="date" value={this.props.annee} onChange={this.sortieChange} />
                    </label>
                      <br/>
                    <label>
                      Genre(Rap , Rock , Pop , Electro , Autre) :
                        <br/>
                      <input type="text" value={this.props.mois} onChange={this.genreChange}  />
                    </label>
                      <br/>
                    <label>
                      Lien Cover :
                        <br/>
                      <input type="text" value={this.props.jour} onChange={this.lienChange} />
                    </label>
                      <br/>
                      <label>
                        Auteur:
                          <br/>
                        <input type="text" value={this.props.heure} onChange={this.auteurChange}  />
                      </label>
                        <br/>
                        <label>
                          Disponible (oui/non):
                            <br/>
                          <input type="text" value={this.props.heure}  onChange={this.dispoChange} />
                        </label>
                          <br/>
                    <label>
                      Reference de tracks:
                        <br/>
                      <input type="text" value={this.props.heure} onChange={this.tabtrackChange} />
                    </label>

                    <input type="submit" value="Submit" />
                    </form>
                      <br/>
                      <br/>
                                  <form onSubmit={this.TracksSubmit}>
                                  <h2>Track</h2>
                                  <label>
                                   Titre :
                                   <br/>
                                  <input type="text" value={this.props.annee} onChange={this.titretChange} />
                                  </label>
                                    <br/>
                                  <label>
                                   Durée (en secondes):
                                     <br/>
                                  <input type="text" value={this.props.annee} onChange={this.dureeChange} />
                                  </label>
                                    <br/>
                                  <label>
                                   Nombre d'écoutes :
                                     <br/>
                                  <input type="text" value={this.props.annee} onChange={this.ecouteChange} />
                                  </label>
                                    <br/>
                                  <label>
                                   Nombre de likes :
                                     <br/>
                                  <input type="text" value={this.props.annee} onChange={this.likesChange} />
                                  </label>
                                    <br/>
                                  <label>
                                  Feat:
                                    <br/>
                                  <input type="text" value={this.props.annee} onChange={this.featChange}/>
                                  </label>
                                    <br/>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}



export default Formulaire;
