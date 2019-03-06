import React, { Component } from 'react';
import '../style/Widget.css';


class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',places: '0',fond: (1)};

    this.handleChange = this.handleChange.bind(this);
    this.handleChangefond = this.handleChangefond.bind(this);
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

  handleSubmit(event) { ///QUAND ON SUBMIT ON APPELLE LES FONCTIONS DU PARENT
    this.props.onNBplace(this.state.places);
    this.props.onNfond(this.state.fond);

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
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}



export default Formulaire;
