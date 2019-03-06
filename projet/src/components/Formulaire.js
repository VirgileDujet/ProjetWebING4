import React, { Component } from 'react';
import '../style/Widget.css';


class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',places: '0',fond: (1),prepa :(1),echau: (1),jour: (6),mois: (2), annee: (2019), heure : (20), lien: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIXMhM7wIHrNd1YXmvjzsoadndwcrLBtYsCv-klJjKY5SfRan"};

    this.handleChange = this.handleChange.bind(this);

    this.handleChangefond = this.handleChangefond.bind(this);
        this.handleChangeprepa = this.handleChangeprepa.bind(this);
            this.handleChangeechau = this.handleChangeechau.bind(this);

      this.handleChangeannee = this.handleChangeannee.bind(this);
        this.handleChangemois = this.handleChangemois.bind(this);
          this.handleChangejour = this.handleChangejour.bind(this);
            this.handleChangeheure = this.handleChangeheure.bind(this);

      this.handleChangelien = this.handleChangelien.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      this.setState({places:  e.target.value});
    //  this.props.onNBplace(e.target.value);
  }
  ///SETTER DE STATE
  handleChangefond(e) {
      this.setState({fond:  e.target.value});
    //  this.props.onNBplace(e.target.value);
  }

  ///SETTER DE STATE
  handleChangeprepa(e) {
      this.setState({prepa:  e.target.value});
    //  this.props.onNBplace(e.target.value);
  }

  ///SETTER DE STATE
  handleChangeechau(e) {
      this.setState({echau:  e.target.value});
    //  this.props.onNBplace(e.target.value);
  }

  handleChangeannee(e) {
      this.setState({annee:  e.target.value});
  }

  handleChangemois(e) {
      this.setState({mois:  e.target.value});
  }

  handleChangejour(e) {
      this.setState({jour:  e.target.value});
  }

  handleChangeheure(e) {
      this.setState({heure:  e.target.value});
  }

  handleChangelien(e) {
      this.setState({lien:  e.target.value});
  }

  handleSubmit(event) { ///QUAND ON SUBMIT ON APPELLE LES FONCTIONS DU PARENT
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

  render() {
    return (

      <div className="Formulaire">
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre de places:
          <input type="text" value={this.props.places} onChange={this.handleChange} />
        </label>
        <label>
          Fond:
          <input type="text" value={this.props.fond} onChange={this.handleChangefond} />
        </label>
        <label>
          Prepa:
          <input type="text" value={this.props.prepa} onChange={this.handleChangeprepa} />
        </label>
        <label>
          Echau:
          <input type="text" value={this.props.echau} onChange={this.handleChangeechau} />
        </label>
        <label>
          Année de la prochaine pièce :
          <input type="text" value={this.props.annee} onChange={this.handleChangeannee} />
        </label>
        <label>
          Mois de la prochaine pièce :
          <input type="text" value={this.props.mois} onChange={this.handleChangemois} />
        </label>
        <label>
          Jour de la prochaine pièce :
          <input type="text" value={this.props.jour} onChange={this.handleChangejour} />
        </label>
        <label>
          Heure de la prochaine pièce :
          <input type="text" value={this.props.heure} onChange={this.handleChangeheure} />
        </label>
        <label>
          Lien de la couverture :
          <input type="text" value={this.props.lien} onChange={this.handleChangelien} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}



export default Formulaire;
