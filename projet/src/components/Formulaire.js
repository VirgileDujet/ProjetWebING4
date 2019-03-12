import React, { Component } from 'react';
import '../style/Widget.css';


class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',places: '0',fond: (1),prepa :(1),echau: (1),jour: (6),mois: (2), annee: (2019), heure : (20), lien: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIXMhM7wIHrNd1YXmvjzsoadndwcrLBtYsCv-klJjKY5SfRan"};


    this.ArtistSubmit = this.ArtistSubmit.bind(this);
      this.AlbumSubmit = this.AlbumSubmit.bind(this);
        this.TracksSubmit = this.TracksSubmit.bind(this);
  }


ArtistSubmit(event) {
    this.props.onNBplace(this.state.places);
    this.props.onNfond(this.state.fond);
      this.props.onNechau(this.state.echau);
        this.props.onNprepa(this.state.prepa);

        this.props.onNheure(this.state.heure);
            this.props.onNmois(this.state.mois);
                this.props.onNjour(this.state.jour);
                    this.props.onNannee(this.state.annee);

      this.props.onNlien(this.state.lien);

    event.preventDefault();
  }

AlbumSubmit(event) {



    event.preventDefault();
  }

TracksSubmit(event) {


    event.preventDefault();
  }

  render() {
    return (

      <div className="Formulaire">
      <h2>Artiste</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom de l'artiste :
            <br/>
          <input type="text" value={this.props.places}  />
        </label>
        <br/>
        <label>
          Date de naissance :
            <br/>
          <input type="text" value={this.props.fond}  />
        </label>
          <br/>
        <label>
          Nombre de followers :
            <br/>
          <input type="text" value={this.props.prepa}  />
        </label>
          <br/>
        <label>
          Ref de l'Album :
            <br/>
          <input type="text" value={this.props.echau} />
        </label>
        <input type="submit" value="Submit" />
        </form>
          <br/>
          <br/>

                    <form onSubmit={this.handleSubmit}>
                    <h2>Album</h2>
                    <label>
                     Titre :
                       <br/>
                    <input type="text" value={this.props.annee}  />
                    </label>
                    <br/>
                    <label>
                      Date de sortie:
                        <br/>
                      <input type="date" value={this.props.annee} />
                    </label>
                      <br/>
                    <label>
                      Genre :
                        <br/>
                      <input type="text" value={this.props.mois}  />
                    </label>
                      <br/>
                    <label>
                      Lien Cover :
                        <br/>
                      <input type="text" value={this.props.jour}  />
                    </label>
                      <br/>
                    <label>
                      Reference de tracks:
                        <br/>
                      <input type="text" value={this.props.heure}  />
                    </label>
                      <br/>
                    <label>
                      Lien de la couverture :
                        <br/>
                      <input type="text" value={this.props.lien} />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                      <br/>
                      <br/>
                                  <form onSubmit={this.handleSubmit}>
                                  <h2>Track</h2>
                                  <label>
                                   Titre :
                                   <br/>
                                  <input type="text" value={this.props.annee}  />
                                  </label>
                                    <br/>
                                  <label>
                                   Durée :
                                     <br/>
                                  <input type="text" value={this.props.annee}  />
                                  </label>
                                    <br/>
                                  <label>
                                   Nombre d'écoutes :
                                     <br/>
                                  <input type="text" value={this.props.annee}  />
                                  </label>
                                    <br/>
                                  <label>
                                   Nombre de likes :
                                     <br/>
                                  <input type="text" value={this.props.annee}  />
                                  </label>
                                    <br/>
                                  <label>
                                  Reference artiste :
                                    <br/>
                                  <input type="text" value={this.props.annee} />
                                  </label>
                                    <br/>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}



export default Formulaire;
